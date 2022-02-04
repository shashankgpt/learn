// sum of 2 numbers in a array, equal to given number

const sum = (arr, sum) => {
    arr.sort((a, b) => a - b);
    let i =0;
    let j = arr.length -1
    while(i < arr.length && j > 0) {
        if (sum === arr[i] +arr[j]) {
            console.log(arr[i], arr[j]);
            return;
        } else if (sum > arr[i] + arr[j]) {
            i = i +1;
            continue;
        } else {
            j = j -1;
            continue;
        }
    }
}

sum([2,5,10,4,34,5], 39);