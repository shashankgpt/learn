function isValidSubsequence(array, sequence) {
    if (array.length < sequence.length) {
        return false
    }
    const a = array.reduce((obj, v, i) => {
        if (!obj[v]) obj[v] = i+1
        return obj
    }, {})
    let index = null;
    for (let i = 0; i<sequence.length;i++) {
        if (a[sequence[i]]) {
            const val = a[sequence[i]];
            if (index !== null && index >= val) {
                return false;
            }
            index = a[sequence[i]]
        } else {
            return false
        }
    }
    return true;
  }

  console.log(isValidSubsequence([1, 1, 1, 1, 1], [1, 1, 1]))
