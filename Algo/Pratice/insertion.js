const insertionSort = (arr) => {
    for (let i = 0;i<arr.length;i++) {
        const pivot = arr[i];
        for (let j = i-1; j>=0;j--) {
            if (pivot > arr[j]) {
                break;
            }
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
        }
    }
}

const arr = [45, 7, 8, 9, 80, 10, 20];
insertionSort(arr);
console.log(arr); // Array after sorting