const input  = [64, 25, 12, 22, 11];

const selectionSort = (arr) => {
    for (let i= 0; i< arr.length;i++) {
        let smallest = i;
        // finding smallest
        for (let j =i+1;j<arr.length;j++) {
            if (arr[smallest] > arr[j]) {
                smallest = j
            }
        }
        [arr[i],arr[smallest]] = [arr[smallest], arr[i]]
    }
    return arr;
}

console.log(selectionSort(input));