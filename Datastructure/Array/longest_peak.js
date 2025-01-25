function longestPeak(array) {
  const peak = [];
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      peak.push(i);
    }
  }

  if (peak.length ===0) {
    return 0;
  }
  let maxPeakLen = 1;
  for (let i =0;i<peak.length;i++) {
    const len = checkPeakLength(peak[i], array)
    if (len > maxPeakLen) {
        maxPeakLen = len
    }
  }
  return maxPeakLen
}

const checkPeakLength = (index, arr) => {
    let len = 0;
    let current = index;
    while (arr[current] > arr[current -1]) {
        len +=1;
        current -=1;
    }
    current = index
    while (arr[current] > arr[current +1]) {
        len +=1;
        current +=1;
    }

    return len+1;
}

longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]);
