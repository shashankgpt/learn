function insertionSort(arr) {
    for(let i = arr.length-2; i >= 0; i--) {
        const key = arr[i];
        for(let j = i+1; j < arr.length;j++) {
            if(key < arr[j]) {
                arr[j-1] = key; 
                break;
            }
            [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
        }
    }
    return arr;
}

console.log(insertionSort([5,2,4,6,1,3]));

console.log(insertionSort([31,41,59,26,41,58]));