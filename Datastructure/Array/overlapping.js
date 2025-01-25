function mergeOverlappingIntervals(array) {
    array.sort((a,b) => a[0] - b[0])
  const overlap = [array[0]];
  for (let i = 1; i < array.length; i++) {
    const previous = overlap[overlap.length - 1];
    const current = array[i];
    if (previous[1] >= current[0]) {

      overlap[overlap.length - 1] = [previous[0], previous[1] > current[1] ?previous[1]: current[1]];
    } else {
      overlap.push(current);
    }
  }
  return overlap;
}

mergeOverlappingIntervals([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10]
]);
