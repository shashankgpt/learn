// convert to curry function

function add(x,y,z,w) {
    return x+y+z+w
}

function convertToCurry(func) {
    return function curryFun(...args) {
        if (args.length >= func.length) {
            return func(...args)
        }
        return function (...next) {
            return curryFun(...args, ...next)
        }
    }
}

const curried = convertToCurry(add);
console.log(curried(1)(2)(3)(4))