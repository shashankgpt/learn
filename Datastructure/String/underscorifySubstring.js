function underscorifySubstring(string, substring) {
  console.log(string.split(''))
  let r1 = underscorifySubstringC(string, substring);
  console.log(r1);
debugger;
  if (r1.length < 1) {
    return string;
  }
  for (let i = 1; i < r1.length; i++) {
    const item = r1[i];
    const prevItem = r1[i - 1];
    if (item[0] <= prevItem[1]) {
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
      char = '_'+char
      j++;
    }
    finalString += char;
  }

  if (final[j] === string.length) {
    finalString += '_';
  }
  return finalString;
}

function underscorifySubstringC(string, substring) {
  const r = [];
  let i =0
  while (i<= string.length - substring.length) {
    if (string.substring(i, i+ substring.length) === substring) {
      r.push([i, i+ substring.length])
    }
    i++
  }
  return r;
}

underscorifySubstring(
  "ttttttttttttttbtttttctatawtatttttastvb",
  "ttt"
);