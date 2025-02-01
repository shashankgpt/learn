  function subarraySort(array) {
    if (array.length < 2) {
      return [-1, -1];
    } else if (array.length === 2) {
      return array[0] <= array[1] ? [-1, -1] : [0, 1];
    }
    let iterator = 0;
    let start = -1;
    while (iterator < array.length-1) {
      const nonIncreasingNumber = findNonIncreasingNumber(iterator, array); 
      start = findLastShorterEle(nonIncreasingNumber, array, start);
      iterator = nonIncreasingNumber
    }
    iterator = array.length-1
    let end = -1
    while (iterator > 0) {
      const increasingNumber = findIncreasingNumber(iterator, array); 
      end = findLastLongerEle(increasingNumber, array, end);
      iterator = increasingNumber
    }


    return [start, end]
  }

  const findLastLongerEle = (endIndex, array, end) => {
    for (let i =array.length-1;i>endIndex;i--) {
      if (array[i] < array[endIndex] && (end < i || end === -1)) {
        return i;
      }
    }
    return end;
  }

  const findLastShorterEle = (endIndex, array, start) => {
    for (let i =0;i<endIndex;i++) {
      if (array[i] > array[endIndex] && (start > i || start === -1)) {
        return i;
      }
    }
    return start;
  }

  const findIncreasingNumber = (start, array) => {
      let last = array[start];
      for (let i = start-1;i>-1;i--) {
          if (last < array[i]) {
              return i;
          }
          last = array[i]
      }
      return 0;
  }

  const findNonIncreasingNumber = (start, array) => {
    let prev = array[start];
    for (let i = start + 1; i < array.length; i++) {
      if (prev > array[i]) {
        return i;
      }
      prev = array[i];
    }
    return array.length - 1;
  };

  subarraySort([1,2,4,7,10,11,7,12,6,7,16,18,19]);
