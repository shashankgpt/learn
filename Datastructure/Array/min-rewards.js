function minRewards(scores) {
    let sumArray = [1]
    debugger;
    for (let i=1;i<scores.length;i++) {
        if (scores[i-1]> scores[i]) {
            if (sumArray[i-1] <= (sumArray[i] || 1)) {
                sumArray = backTrack(sumArray)
            }
            
            sumArray.push(1)
        } else if (scores[i-1] < scores[i]) {
            sumArray.push(sumArray[i-1]+1)
        }
       
    }
    return sumArray;
}

function backTrack(sumArray) {
    debugger;
    for (let i =sumArray.length-1;i>-1;i--) {
        if (sumArray[i] == (sumArray[i+1] || 1))
            sumArray[i] = sumArray[i] +1
        else {
            return sumArray;
        }
    }
    return sumArray
}

minRewards([800, 400, 20, 10, 30, 61, 70, 90, 17, 21, 22, 13, 12, 11, 8, 4, 2, 1, 3, 6, 7, 9, 0, 68, 55, 67, 57, 60, 51, 661, 50, 65, 53])