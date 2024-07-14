function isValidSubsequence(array, sequence) {
   if (!(array.length >= sequence.length)) {
    return false
   }
   let currentSeq = 0;
   let j =0;
   while (j< sequence.length) {
    debugger;
    const eleIndex = array.indexOf(sequence[j])
    if (!(eleIndex > -1)) {
        return false
    } else {
        if (currentSeq > eleIndex) {
            return false
        } 
        currentSeq = eleIndex;
        array[eleIndex] = null
    }
    j++
   }
   return j === sequence.length
  }
  const a = [5, 1, 22, 25, 6, -1, 8, 10];
  const s = [5, 1, 22, 22, 6, -1, 8, 10]
  console.log(isValidSubsequence(a,s))
  