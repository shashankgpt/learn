function smallestSubstringContaining(bigString, smallString) {
    const bigStringMap = {};
  
    const smallStringMap = {};
    for (let i = 0; i < smallString.length; i++) {
      const char = smallString[i];
      if (smallStringMap[char]) {
        smallStringMap[char] += 1;
      } else {
        smallStringMap[char] = 1;
      }
    }
    debugger;
  
    let start = 0;
    let end = -1;
    let minString = '';
    let minStringLen = Infinity;
  
    while (start < bigString.length && end < bigString.length) {
      if (!isMatch(bigStringMap, smallStringMap)) {
        end++;
        if (bigStringMap[bigString[end]]) {
          bigStringMap[bigString[end]] += 1;
        } else {
          bigStringMap[bigString[end]] = 1;
        }
      } else {
        if (end - start < minStringLen) {
            minString = bigString.substring(start, end + 1);
            minStringLen  = end - start
        }
       
        if (bigStringMap[bigString[start]]) {
          bigStringMap[bigString[start]] -= 1;
        }
        start++;
      }
    }
    return minString
  }
  
  const isMatch = (bigMap, smallMap) => {
    for (const [key, value] of Object.entries(smallMap)) {
      if (bigMap[key] && bigMap[key] >= value) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  };

smallestSubstringContaining("abcd$ef$axb$c$", "$$abf");
