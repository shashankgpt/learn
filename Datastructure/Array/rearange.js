/**
 * Rearrange array in alternating positive & negative items with O(1) extra space | Set 1
 * @param {*} arr 
 * @param {*} n 
 * @returns 
 */

function rearrange(arr, n) {
    let type = -1;
    let i =0;
    let j =i+1
    while (i<n && j<n) {
        const pivotElementIndex = i
        //console.log("start")
        //console.log(i, j, type, arr);
        if (type === 1) {
            if (arr[pivotElementIndex] > -1) {
                i++
                j = i+1
                type *=-1
            } else if (arr[j] > 0) {
                [arr[j], arr[pivotElementIndex]]=  [arr[pivotElementIndex], arr[j]]
                i++
                j = i+1
                type *=-1
            } else {
                j++
            }
        } else {
            if (arr[pivotElementIndex] < -1) {
                i++
                j = i+1
                type = 1
            } else if (arr[j] < 0) {
                [arr[j], arr[pivotElementIndex]]=  [arr[pivotElementIndex], arr[j]]
                i++
                j = i+1
                type *=-1
            } else {
                j++
            } 
        }
       // console.log("end")
       // console.log(i, j, type, arr);
    }
    return arr;
}