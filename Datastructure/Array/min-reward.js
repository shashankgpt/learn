function minRewards(scores) {
    let lastVal = 1;
    let sum = 1;
    let j = 0;
    for (let i =1;i<scores.length;i++) {
        if (scores[i] > scores[i-1])
        {
            lastVal = lastVal +1
            sum = sum + lastVal;
            j =i+1;
        } else {
            sum = sum + (i-j) * 1 + 1
            lastVal = 1;
        }
    }
    return sum;
}

minRewards([0,4,2,1,3])