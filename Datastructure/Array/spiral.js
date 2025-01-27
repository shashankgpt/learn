function spiralTraverse(array) {
    const data = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      data.push(array[startRow][i]);
    }
    for (let j = startRow + 1; j <= endRow; j++) {
      data.push(array[j][endCol]);
    }

    if (startRow < endRow) {
      for (let i = endCol - 1; i >= startCol; i--) {
        data.push(array[endRow][i]);
      }
    }
    if (startCol < endCol) {
      for (let j = endRow - 1; j > startRow; j--) {
        data.push(array[j][startCol]);
      }
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return data;
}

spiralTraverse([
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
]);
