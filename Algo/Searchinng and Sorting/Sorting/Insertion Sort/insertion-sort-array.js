const input = [5, 2, 4,6,1,3];


const sortArry = (arr) => {
    for (let i =1; i<arr.length;i++) {
        const current = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            if (current > arr[j]) {
                break;
            }
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
        }
    }
    return arr;
}


console.log(sortArry(input));