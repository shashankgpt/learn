function InsertionSort(arr) {
    for (let i =1; i<arr.length;i++) {
        const ele = arr[i];
        for (j =i-1; j>=0;j--) {
            if (ele > arr[j]) {
                break;
            }
           [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }
    }
    console.log(arr)
    return arr;
}

i =1, 1
j = 0, 3

console.log(InsertionSort([3,1,4,7,6])) 

// [1,3,4,7,6]