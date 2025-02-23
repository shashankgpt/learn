function countSquares(points) {
    const midPoint = [];
  if (points.length < 4) {
    -1;
  }
  const obj = points.reduce((obj, val) => {
    obj[val] = 1;
    return obj;
  }, {});

  let count = 0;

  for (let i =0;i<points.length;i++) {
    count = count + countSquare(points, i, obj)
  }
  
  return count
}


const countSquare = (points, startPoint, map) => {
    debugger;
    let count = 0
    const point1 = points[startPoint];
    for (let i =startPoint+1;i<points.length;i++) {
        const point2 = points[i];
        const xMidPoint = (point1[0] + point2[0])/2
        const yMidPoint = (point1[1] + point2[1])/2
        if(isPointPresent(point2, [xMidPoint, yMidPoint], map)) {
            count++;
        }
    }
    return count/2;
}

const isPointPresent = (point, midPoint, map) => {
    debugger;
    const distanceX = point[0] - midPoint[0]
    const distanceY = point[1] - midPoint[1];

    const point3X = midPoint[0] +  distanceY
    const point3Y = midPoint[1] - distanceX 

    const point4X = midPoint[0] -  distanceY
    const point4Y = midPoint[1] + distanceX 

    return map[[point3X, point3Y]] && map[[point4X, point4Y]];
}



countSquares([
  [1, 1],
  [0, 0],
  [-4, 2],
  [-2, -1],
  [0, 1],
  [1, 0],
  [-1, 4],
]);


countSquares([
    [0, 0],
    [1, 1],
    [1, 0],
    [2, 1],
    [2, 0],
  ]);
  