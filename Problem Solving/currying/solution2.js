function add(x) {
    return function (y) {
        if (y) {
            x = x+y
            return arguments.callee
        }
        return x
    }
}

console.log(add(2)(1)(3)(4)())