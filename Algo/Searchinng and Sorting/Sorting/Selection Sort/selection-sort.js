const input  = [64, 25, 12, 22, 11];

const selectionSort = (arr) => {
    for (let i= 0; i< arr.length;i++) {
        let smallestIndex = i;
        for (let j =i+1; j <arr.length;j++) {
            if(arr[smallestIndex] > arr[j]) {
                smallestIndex = j;
            }
        }
        [arr[smallestIndex], arr[i]] = [arr[i], arr[smallestIndex]];
    }
    return arr;
}

console.log(selectionSort(input));