Array.prototype.flatten = function() {
    const a = []
    for (let i =0; i<this.length;i++) {
        if (Array.isArray(this[i]))
        {
            a.push(...this[i].flatten());
        } else {
            a.push(this[i])
        }
    }
    return a
}

const a = [1,2,3,[4,5, [6,7]]]