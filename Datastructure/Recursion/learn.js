function log(a) {
    if (a <0) {
        return 0;
    }
    a = a -1
    log(a)
    console.log(a)
}

log (5)