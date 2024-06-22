function twoNumberSum(array, targetSum) {
    array.sort((a,b) => a -b)
    for (let i =0; i<array.length; i++) {
        const val1 = array[i];
        const num = targetSum - val1
        for (let j =0; j<array.length;j++) {
            if (num === array[j]) {
                return [val1, array[j]]
            }
        }
    }
    return []
  }

  