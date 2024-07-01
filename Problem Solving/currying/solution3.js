function add(x) {
    var addNext = function(y) {
        return add(x+y)
    } 

    addNext.valueOf = addNext.toString = function() {
        return x;
    }
    return addNext;
}

console.log(add(2)(1)(3)(4).toString())