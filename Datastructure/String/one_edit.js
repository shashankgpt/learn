function oneEdit(stringOne, stringTwo) {
  const str1Len = stringOne.length;
  const str2Len = stringTwo.length;
  if (str2Len - str1Len == 0) {
    return checkString(stringOne, stringTwo);
  } else if (Math.abs(str2Len - str1Len) === 1) {
    if (str2Len > str1Len) return findExtraChar(stringTwo, stringOne);
    else return findExtraChar(stringOne, stringTwo);

  }
  return false;
}

function checkString(str1, str2) {
  let count = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str1[i] !== str2[i]) {
      count++;
      if (count > 1) {
        return false;
      }
    }
  }
  return true;
}

function findExtraChar(biggerStr, smallerStr) {
    let i=0;
    let j= 0
    let count = 0;
    while (i < biggerStr.length && j< smallerStr.length) {
        if (biggerStr[i] !== smallerStr[j]) {
            count++
            i++
            if (count > 1) return false
        }
    }
    return true
}

oneEdit('bb', 'a')
