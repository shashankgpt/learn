function transposeMatrix(matrix) {
  const data = [];
  for (let i =0;i<matrix.length;i++) {
    for (let j = 0;j<matrix[i].length;j++) {
     if (!data[j]) {
      data[j] = []
     }
     data[j][i] = matrix[i][j]
  }
}
return data;
}

const t = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

transposeMatrix(t);