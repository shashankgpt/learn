function binary_search(arr,start,end, num) {
    debugger;
    const m = Math.floor((start+end)/2);
    if (arr[m] === num)
        return "Found";
    else if (arr[m] < num) {
       return binary_search(arr, m+1, end, num)
    }
    else {
       return binary_search(arr, start, m-1, num)
    }
}

const arr = [1,4,7,9,10,24,56,78];
console.log(binary_search(arr,0, arr.length-1, 7))


