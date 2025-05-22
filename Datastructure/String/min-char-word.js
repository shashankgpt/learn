function minimumCharactersForWords(words) {
    const hashMap = {}
    const d = []
    for (let i = 0;i<words.length;i++) {
        let w = words[i];
        const wordMap = {}
        for (let j =0;j<w.length;j++) {
            if (wordMap[w[j]]) {
                wordMap[w[j]] = wordMap[w[j]] +1;
            } else {
                wordMap[w[j]] = 1;
            }
        }
        d.push(wordMap)
    }
    return d
  }
  
  console.log(minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"]))