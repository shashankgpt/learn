function collidingAsteroids(asteroids) {
  if (asteroids.length < 2 || isSameSign(asteroids)) {
    return asteroids
  }
  let prevS = null
  let currentS = getCollideValue(asteroids);
  if (currentS.length < 2) {
    return currentS
  }
  debugger;
  while (prevS=== null || currentS.length > 1) {
    if (prevS && prevS.length === currentS.length) {
        return currentS;
    }
    prevS = currentS
    currentS = getCollideValue(currentS);
  }
  return currentS;
  
}

const getCollideValue = (asteroids) => {
    const s = [asteroids[0]];
    for (let i =1;i<asteroids.length;i++) {
      const item = asteroids[i];
      const prevItem = s[s.length-1];
      if (isSameSign([item, prevItem]) || prevItem < 0) {
          s.push(item)
      } else if (prevItem + item === 0) {
          s.pop()
      } else if (prevItem  < item  * -1) {
          s.pop()
          s.push(item)
      }
    }
    return s;
}

const isSameSign = (items) => {
    const allPostive = items.filter((a) => a > 0)
    const allNegative = items.filter((a) => a < 0)
    return !(allPostive.length > 0 && allNegative.length > 0)
}

collidingAsteroids([1,2,-4]);

// [-3, 5, -8, 6, 7, -4, -7]
