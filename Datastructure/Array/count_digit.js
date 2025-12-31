function countDigit(n) {
    if (n===0) return 1
    let val = n;
    if (val < 0) {
        val = val * -1
    }
    let i = 0;
    while (val >= 1) {
        val = val/10
        i++;
    }
    return i;
}

console.log(countDigit(0));