function largestRange(array) {
    const range = []
    array.sort((a,b) => a -b);
    let currentRange = [array[0], 1]
    for (let i =1;i<array.length;i++) {
        debugger;
        if (1=== array[i] - array[i-1] || 0=== array[i] - array[i-1]) {
            currentRange = [currentRange[0], currentRange[1]+array[i] - array[i-1]]
        } else {
            range.push(currentRange)
            currentRange = [array[i], 1]
        }
    }
    range.push(currentRange);
    let firstEle = range[0][0]
    let count = range[0][1]
    for (let i =1;i<range.length;i++) {
        if (count < range[i][1]) {
            firstEle = range[i][0];
            count = range[i][1]
        }
    }
    return [firstEle, firstEle+count-1]
}

largestRange([19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14])