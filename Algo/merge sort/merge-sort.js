function merge(arr, p,q,r) {
    const n1 = q-p+1; // 0 - 3 = 3
    const n2 = r-q; // 7-3 = 4
    // console.log(arr, p, q, r)
    const L = new Array(n1+1);
    const R = new Array(n2+1);
    for(let i = 0; i<n1;i++) {
        L[i] = arr[i+p];
    }
    
    for(let i = 0; i<n2;i++) {
        R[i] = arr[i+q+1];
    }
    L[L.length-1] = Infinity;
    R[R.length-1] = Infinity;
    i = 0;
    j = 0;
    for(let k =0; k< arr.length;k++) {
        if(L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j]
            j++
        }
    }
    return arr;
    }

function mergeSort(arr, p, r) {
    console.log(arr, p, r)
    if(p<r) {
        const q = parseInt((p +r) /2);
        mergeSort(arr, p, q);
        mergeSort(arr, q+1,r);
        merge(arr,p,q,r);
    }
    return arr;
}

console.log(mergeSort([2,4,5,7,1,2,3,6], 0 , 7));