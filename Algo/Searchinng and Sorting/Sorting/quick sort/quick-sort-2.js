/** 
1. Always pick first element as pivot.
2. Always pick last element as pivot (implemented below)
3. Pick a random element as pivot.
4. Pick median as pivot.

*/

const input = [35, 20, 30, 90, 40, 50, 70]

// Always pick first/last element as pivot.
const partition = (arr,  low, high) => {
    const pivot = arr[high];
    let i = low -1;
    for (let j = low; j<high -1;j++) {
        if (arr[j]< pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
    console.log(arr, i+1);
   return i+1;
}

const quickSort = (input, low, high) => {
    if(low < high) {
        const pi = partition(input, low, high);
        quickSort(input, low, pi);
        quickSort(input, pi+1, high)
    }
}

console.log(quickSort(input, 0 , 6));
console.log(input);