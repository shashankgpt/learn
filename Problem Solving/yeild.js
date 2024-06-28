function* IdGenerator() {
    let i = 1;
    while (true) {
        const inc = yield i;
        if (inc) {
            i += inc
        } else {
            i++
        }
    }
}

const id = IdGenerator();
console.log(id.next())
console.log(id.next(10))
console.log(id.return(100))