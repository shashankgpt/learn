function underscorifySubstring(string, substring) {
  let r1 = underscorifySubstringC(string, substring);
  if (r1.length < 1) {
    return string;
  }
  for (let i = 1; i < r1.length; i++) {
    const item = r1[i];
    const prevItem = r1[i - 1];
    if (item[0] === prevItem[1] || item[0] === prevItem[1] + 1) {
      r1[i][0] = prevItem[0];
      r1[i - 1] = null;
    }
  }
  const final = r1.filter((n) => n != null).flat();
  let finalString = "";
  let j = 0;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (final[j] === i) {
      if (j % 2 === 0) {
        char = "_" + char;
      } else {
        char = char + "_";
      }
      j++;
    }
    finalString += char;
  }
  return finalString;
}

function underscorifySubstringC(string, substring) {
  let p = 0;
  const r = [];
  for (let i = 0; i < string.length; i++) {
    if (p >= substring.length) {
      r.push([i - substring.length, i - 1]);
      p = 0;
    }
    if (substring[p] === string[i]) {
      p++;
    } else if (substring[p] === string[i - 1]) {
      i = i - 1;
      p++;
    } else {
      p = 0;
    }
  }
  return r;
}

underscorifySubstring(
  "testthis is a testtest to see if testestest it works",
  "test"
);
