function fourNumberSum(array, targetSum) {
  if (array.length < 4) {
    return -1;
  } else if (array.length === 4) {
    const sum = array.reduce((a, b) => a + b, 0);
    if (sum === targetSum) return array;
    else return -1;
  }

  array.sort((a, b) => a - b);
  const data = [];
debugger;
  for (let a = 0; a < array.length - 3; a++) {
    for (let b = a + 1; b < array.length - 2; b++) {
      let c = b + 1;
      let d = array.length - 1;
      while (c < d) {
        let sum = array[a] + array[b] + array[c] + array[d];
        if (sum === targetSum) {
          data.push([array[a], array[b], array[c], array[d]]);
          c++
          d--
        } else if (sum > targetSum) {
          d--;
        } else {
          c++;
        }
      }
    }
  }
  return data;
}

fourNumberSum([-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
