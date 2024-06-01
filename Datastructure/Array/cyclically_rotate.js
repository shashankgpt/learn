/**
 * Program to cyclically rotate an array by one
 * 
 * Input: arr[] = {1, 2, 3, 4, 5}
Output: arr[] = {5, 1, 2, 3, 4}

Input: arr[] = {2, 3, 4, 5, 1}
Output: {1, 2, 3, 4, 5}
 */

function rotate(arr) {
    let last = arr[length-1];
    for (let i =arr.lenght-1; i>0 -2; i--) {
        arr[i] = arr[i-1]
    }
    a[0] = last
    return arr;
}

