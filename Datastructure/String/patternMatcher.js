function patternMatcher(pattern, string) {
  let swap = false;
  let patternA = pattern.split("");
  debugger;
  if (pattern[0] === "y") {
    swap = true;
    patternA = patternA.map((v) => v === 'x' ? 'y': 'x')
  }
  let lenofX
  const { countX, countY, posititionofY } = getPositionAndCount(patternA);
  if (countY === 0) {
    lenofX = string.length/countX
    return swap ? ["", string.substr(0, lenofX)] :[string.substr(0, lenofX),""]
  }

  lenofX = 1;
  while (lenofX < string.length) {
    const lenofY = (string.length - countX * lenofX) / countY;
    if (Number.isInteger(lenofY)) {
      const x = string.substr(0, lenofX);
      const y = string.substr(posititionofY * lenofX, lenofY);
      if (isCorrect(x, y, patternA, string)) {
        return swap ? [y, x] : [x,y];
      }
    }
    lenofX++;
  }
  return []
}

function isCorrect(x, y, patternArray, string) {
  const data = patternArray
    .map((v) => {
      return v === "x" ? x : y;
    })
    .join("");
  return string === data;
}

function getPositionAndCount(patternArray) {
  const obj = {
    countX: 0,
    countY: 0,
    posititionofY: null,
  };
  debugger;
  for (let i = 0; i < patternArray.length; i++) {
    const elem = patternArray[i];
    if (elem === "y") {
      if (obj.posititionofY === null) {
        obj.posititionofY = i;
      }
      obj.countY = obj.countY + 1;
    } else {
      obj.countX = obj.countX + 1;
    }
  }
  return obj;
}

patternMatcher("xxxx", "testtesttesttest");
