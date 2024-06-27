const selection = (arr) => {
    for (let i =0;i<arr.length;i++) {
        let smallest = i;
        for (let j = i+1;j<arr.length;j++) {
            if (arr[j]< arr[smallest]) {
                smallest = j;
            }
        }
        [arr[smallest], arr[i]] = [arr[i], arr[smallest]]
    }
}

const arr = [45, 7, 8, 9, 80, 10, 20];
selection(arr);
console.log(arr); // Array after sorting