// [array] sum of 2 numbers in 2 array, equal to given number


// sum of 2 numbers in a array, equal to given number

const sum = (arr1, arr2, arr3, sum) => {
    arr1.sort((a, b) => a - b);
    arr2.sort((a,b) => b - a);

    for(let k =0; k< arr3.length; k++) {
        let i =0;
        let j = 0
    while(i < arr1.length && j < arr2.length) {
        if (sum === arr1[i] +arr2[j]+ arr3[k]) {
            console.log(arr1[i], arr2[j],arr3[k]);
            return;
        } else if (sum > arr1[i] + arr2[j]+ arr3[k]) {
            i = i +1;
            continue;
        } else {
            j = j + 1;
            continue;
        }
    }
    }
}

sum([2,5,10,4,34,5],[2,5,2,44,67,89,0,6],[56,8,0,89, 0, 6, 1], 100);