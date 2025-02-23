function longestSubarrayWithSum(array, targetSum) {
    let start = -1;
    let end = -1;
    let i =0;
    let j =1;
    let sum = array[i] + array[j];
    debugger;
    while (j< array.length && i < array.length) {
        if (sum === targetSum) {
            if (array[j+1] == 0) {
                j++
                sum = sum + array[j];
                continue;
            }
            if (end - start < j -i) {
                start = i;
                end = j;
            }
            
            sum = sum - array[i];
            i++
        } else if (sum < targetSum) {
            j++
            sum = sum + array[j];
        } else {
            sum = sum - array[i];
            i++
        }

    }
    if (start === -1) {
        for (let i =0; i< array.length;i++) {
            if (targetSum === array[i]) return [i,i]
        }
        return []
    }
  return [start, end];
}

longestSubarrayWithSum([1, 2, 3, 4, 5], 0);
