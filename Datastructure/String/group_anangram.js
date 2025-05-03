function groupAnagrams(words) {
  const hashMap = {};
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    hashMap[w] = {
    };
    for (let i = 0; i < w.length; i++) {
      if (hashMap[w][w[i]]) {
        hashMap[w][w[i]] = hashMap[w][w[i]] + 1;
      } else {
        hashMap[w][w[i]] = 1;
      }
    }
  }
  const final = [];
  debugger;
  for (let i = 0; i < words.length; i++) {
    let w2 = findAnagram(hashMap, words[i]);
    if (w2) final.push(w2);
  }
  return final;
}

function findAnagram(hashMap, word) {
  const len = word.length;
  const final = [word];
  const wordMap =  hashMap[word]
  if (!wordMap) {
    return false
  }
  delete hashMap[word];
  keys = Object.keys(hashMap);
  for (let i = 0;i<keys.length;i++) {
    const key = keys[i]
    if (key.length === word.length) {
        const values = hashMap[key];
        let okay = true;
        for (const [k, v] of Object.entries(values)) {
            if (wordMap[k] !== v) {
                okay = false
                break;
            }
        }
        if (okay) {
            final.push(key)
            delete hashMap[key];
        }
        
    }
  }
  
  return final
}

console.log(
  groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])
);
