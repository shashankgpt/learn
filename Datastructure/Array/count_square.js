function countSquares(points) {
  let sum = 0;
  const obj = {};
  if (points.length < 4) {
    return sum;
  }
  for (let i = 0; i < points.length; i++) {
    obj[points[i]] = true;
  }
  debugger;
  for (let i = 0; i < points.length; i++) {
    if (checkSquare(points[i], obj)) {
      sum++;
    }
  }

  return sum;
}

const checkSquare = (point, obj) => {
  let point1 = obj[point];
  let point2 = obj[[point[0], point[1] + 1]];
  let point3 = obj[[point[0] + 1, point[1]]];
  let point4 = obj[[point[0] + 1, point[1] + 1]];
  return point1 && point2 && point3 && point4;
};

countSquares([
  [1, 1],
  [0, 0],
  [-4, 2],
  [-2, -1],
  [0, 1],
  [1, 0],
  [-1, 4],
]);
