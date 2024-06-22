function partition_array(low ,high, arr) {
    const m = Math.floor((low + high)/2) // 3
    const pivot = arr[m]; // 9
    let start = low; // 0
    let end = high; //6
    debugger;
    while (start <= end) {
        while (pivot > arr[start]) { 
            start++
        }
        while (pivot < arr[end]) {
            end--
        }
        if (start <= end) {
            [arr[start], arr[end]] =  [arr[end], arr[start]]
            start++
            end--
        }
    }
    return start;
}

function quick_sort(arr, low, high) {
    if (low < high) {
        // Partition the array and get the pivot index
        const pi = partition_array(low, high, arr);

        // Recursively sort the subarrays
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi, high);
    }
}

// Sample usage
const arr = [45, 7, 8, 9, 80, 10, 20];
quick_sort(arr, 0, arr.length - 1);
console.log(arr); // Array after sorting