function binary_search(arr, num) {
    let start = 0;
    let end = arr.length -1
    while (start <= end) {
        let mid = Math.ceil((start + end)/2); // 4
        if (arr[mid] === num) { // 10
            return mid
        } else if (arr[mid] < num) {
            start = mid +1
        } else {
            end = mid -1
        }
    }
}


binary_search([1,4,7,9,10,24,56,78], 7)


