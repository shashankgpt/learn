function sunsetViews(buildings, direction) {
    let largest = 0
    let result = []
    if (direction === 'WEST') {
        buildings.reverse()
    }
    debugger;
    for (let i =buildings.length-1;i>=0;i--) {
        if (largest >= buildings[i]) {
            continue;
        }
        result.push(i)
        largest = buildings[i]
    }
    if (direction === 'WEST') {
        result = result.map((r) => (buildings.length - (r+1)))
        return result
    } 
    return result.reverse();
  }


  sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], "WEST")