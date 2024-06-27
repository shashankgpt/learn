const mergeSort = (arr, p, r) => {
    if (p<r) {
        const q = Math.floor((p+r)/2)
        mergeSort(arr, p , q)
        mergeSort(arr, q+1, r)
        return merge(arr, p,q,r)

    }
}

const merge = (arr, p,q,r) => { // 0,3,7
    const n1 = q-p+1; //4
    const n2 = r-q // 4
    const L = new Array(n1+1)
    const R = new Array(n2+1)
    for (let i =0;i<n1;i++) {
        L[i] = arr[i+p]
    }

    for (let i =0;i< n2;i++) {
        R[i] = arr[i+q+1]
    }
    L[L.length-1] = -Infinity;
    R[R.length-1] = -Infinity;
    let i =0;
    let j =0;
    for (k=p;k<=r;k++) {
        if (L[i] > R[j]) {
            arr[k] = L[i]
            i++
        } else {
            arr[k] = R[j]
            j++
        }
    }
    return arr;
}

const arr = [45, 7, 8, 9, 80, 10, 20];
mergeSort(arr, 0, arr.length - 1);
console.log(arr); // Array after sorting