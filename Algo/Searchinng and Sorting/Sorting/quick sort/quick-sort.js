/** 
1. Always pick first element as pivot.
2. Always pick last element as pivot (implemented below)
3. Pick a random element as pivot.
4. Pick median as pivot.

*/

const input = [10, 20, 30, 90, 40, 50, 70]

// Always pick first/last element as pivot.
const partition = (arr,  low, high) => {
    const pivot = arr[high];
    let i = low;
    let j = high;
    while(i<j) {
        while (pivot >= arr[i]) {
            i++;
        }
        while (pivot < arr[j]) {
            j--;
        }
        if (i<j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
}

const quickSort = (input, low, high) => {
    if(low < high) {
        const pi = partition(input, low, high);
        quickSort(input, low, pi);
        quickSort(input, pi+1, high)
    } else {
        return input;
    }
    
}

console.log(quickSort(input, 0 , 6));
console.log(input);