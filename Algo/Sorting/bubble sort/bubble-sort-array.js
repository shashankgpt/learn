 const arr = [64, 34, 25, 12, 22, 11, 90];
// always n2
const sort = (a) => {
    let len = a.length;
    for(let i =0; i<len;i++) {
        for(let j =0; j<len-1;j++) {
            if(arr[j] > arr[j+1])
             [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
    return a;
}

console.log(sort(arr));

// will be n in best case already sorted arry
const bubbleSort = (arr) => {
    const n = arr.length;
    let swapped;
    
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        // After each full pass, the largest unsorted element is at the end, so decrement n
        n--;
    } while (swapped);

    return arr;
};
