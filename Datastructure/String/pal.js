function longestPalindromicSubstring(string) {
  if (string.length === 1) {
    return string;
  }
  const obj = {};
  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]]) {
      obj[string[i]].push(i);
    } else {
      obj[string[i]] = [i];
    }
  }
  let values = Object.values(obj);
  let validPal = "";
  debugger;
  for (let i = 0; i < values.length; i++) {
    if (values[i].length < 2) {
      continue;
    }
    let first = 0;
    let last = values[i].length - 1;
    debugger;
    while (first < last) {
      let valid = isValidPalidrome(values[i][first], values[i][last], string);
      if (valid) {
        let str = string.slice(values[i][first], values[i][last] + 1);
        if (str.length > validPal.length) {
          validPal = str;
        }
        break;
      }
      if (values[i][last] - values[i][first] > validPal.length) {
        if (last - first > 0) {
            first++
        } else {
            last--
        }
      } else {
        last--
      }
    }
  }

  return validPal;
}

function isValidPalidrome(p1, p2, string) {
  while (p1 < p2) {
    if (string[p1] !== string[p2]) {
      return false;
    }
    p1++;
    p2--;
  }
  return true;
}

console.log(longestPalindromicSubstring("ab12365456321bb"));
