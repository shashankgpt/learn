const merge = (arr, p, q, r) => {
    const n1 = q -p +1 // 3
    const n2 = r - q // 5 - 2 => 3
    let L = new Array(n1 +1);
    let R = new Array(n2 +1);

    for(let i =0; i<n1; i++) {
        L[i] = arr [i+p]
    }

    for(let i =0; i<n2; i++) {
        R[i] = arr[i+q+1] // 0 + 2
    }
    L[L.length-1] = Infinity;
    R[R.length-1] = Infinity;
    i = 0;
    j = 0;
    for(let k=p; k<=r;k++) {
        if (L[i] <= R[j]) {
            arr[k] = L[i]
            i = i+ 1;
        } else {
            arr[k] = R[j];
            j = j +1;
        }
    }

}

const mergeSort = (arr, p, r) => {
    if(p<r) {
    const q = parseInt((r+p)/2) // 5 + 0 /2 => 2
    mergeSort(arr, p,q) // 0, 2
    mergeSort(arr, q+1, r)// 3, 5
    merge(arr, p, q, r) // 0, 2, 5
    }
    return arr;
}
const input = [5, 2, 4,6,1,3];

console.log(mergeSort(input,0, input.length -1))