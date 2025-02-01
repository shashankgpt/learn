function largestRange(array) {
    const keyMap = {};
    for (let i =0;i<array.length;i++) {
        keyMap[array[i]] = true;
    }
    let range;
    let len = Object.keys(keyMap).length;
    debugger;
    while (len > 0) {
        const temprange = findRange(keyMap, Number(Object.keys(keyMap)[0]))
        if (!range|| temprange[2] > range[2]) {
            range = temprange;
        }
        len = Object.keys(keyMap).length;
    }
    range.pop()
   return range;
}

const findRange = (keyMap, mainEle) => {
    let start = mainEle;
    let end = mainEle;
    let count = 1
    delete keyMap[mainEle]
    
    while (keyMap[end+1]) {
        end = end+1
        count++
        delete keyMap[end]
    }

    while (keyMap[start-1]) {
        start = start-1
        count++
        delete keyMap[start]
    }
    return [start, end, count]
}
  

largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6])