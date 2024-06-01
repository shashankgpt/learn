function binarySearch(arr, n) {
    let low = 0;
    let high = arr.length -1;
    let mid;
    while (low <= high) {
        debugger;
         mid = Math.floor((high-low)/2);
        console.log(mid);
        if (n === arr[mid]) {
            return mid
        } else if (n > arr[mid]) {
            low = mid +1;
        } else {
            high = mid-1
        }
    }
    return null
}

const elemt = 5;

const arr = [2,5,5,7,10,45,46,99, 100, 200,201];
console.log(binarySearch(arr, elemt))

