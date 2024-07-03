function twoNumberSum(array, targetSum) {
    if (array.length < 2) {
        return [];
    } else if (array.length === 2) {
        if (array[0] + array[1] === targetSum) return array
        return []
    }
    array.sort((a,b) => a -b);
    for (let i =0;i<array.length;i++) {
        const firstNumber = array[i]
        // check if there possiblity of finding sum 
        if (firstNumber + array[array.length -1] === targetSum) {
            return [firstNumber, array[array.length -1]]
        } else if (firstNumber + array[array.length -1] < targetSum) {
            continue;
        } else {
            const newArr = [];
            for (let j = i+1;j<array.length;j++) {
                newArr.push(array[j])
            }
            const target = targetSum - firstNumber
            const ele = binarySearch(newArr, 0, newArr.length-1, target);
            if (ele != null) {
                return [firstNumber, target]
            }
        }
    }
    return []
  }

function binarySearch(newArr, start, end, target) {
    const m = Math.floor((start+end)/2)
    if (start > end) {
        return null
    }
    if (newArr[m] === target) {
        return target;
    } else if (newArr[m] > target) {
        return binarySearch(newArr,start,m-1, target)
    } else {
        return binarySearch(newArr,m+1,end, target) 
    }
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
