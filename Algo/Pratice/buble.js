const bubble = (arr) => {
    for (let i =0; i<arr.length;i++) {
        for (let j = 0; j<arr.length;j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
}

const arr = [45, 7, 8, 9, 80, 10, 20];
bubble(arr);
console.log(arr); // Array after sorting