function largestRectangleUnderSkyline(buildings) {
  const answer = [buildings.length];
  for (let i =0;i<buildings.length;i++) {
        calculateMaxArea(buildings, i)
  }

  return Math.max(...answer)
}

function calculateMaxArea(buildings, index) {
    const maxArea = -Infinity
    let left = index -1
    let right = index +1
    while
    
}


largestRectangleUnderSkyline([1, 3, 3, 2, 4, 1, 5, 3, 2])