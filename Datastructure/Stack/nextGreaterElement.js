function nextGreaterElement(array) {
  const res = [];
  let i = 0;
  let j = 1;
  const maxEle = Math.max(...array);
  debugger;
  while (res.length < array.length) {
    if (j >= array.length) {
        j = 0;
      }
    let ele = array[i];
    if (maxEle === ele) {
      res.push(-1);
      i++;
      j = i + 1;
    } else if (ele < array[j]) {
      res.push(array[j]);
      i++;
      j = i + 1;
    } else {
      j++;
    }
  }
  return res;
}

nextGreaterElement([2, 5, -3, -4, 6, 7, 2]);
