function minimumCharactersForWords(words) {
  if (words.length === 0) {
    return [];
  }
  let result = ''
  const main = {}
  const w = [];
  for (let i =0;i<words.length;i++) {
    w.push(createWordObject(words[i]))
  }
  for (let i=0;i<w.length;i++) {
    debugger;
    for (const [key, value] of Object.entries(w[i])) {
        if (!main[key]) {
            main[key] = value;
        } else {
            main[key] = (main[key] < value) ? value : main[key]
        }
    }
  }
  for (const [key, value] of Object.entries(main)) {
    for (let i =0;i<value;i++) {
        result +=key
    }
  }

  return result.split('')

}

function createWordObject(word) {
  return word.split('').reduce((o, v) => {
    if (!o[v]) {
        o[v] = 1;
    } else {
        o[v] += 1;
    }
    return o
  }, {})
}

let words = ["this", "that", "did", "deed", "them!", "a"];
minimumCharactersForWords(words);
