// add(1)(2)(3) // 6

function add(x) {
    var addNext = function(y) {
        return add(x+y)
    } 

    addNext.valueOf = function() {
    return x;
    }
    return addNext;
}

add(1)(2)(3)


function add(x) {
    return function(y) {
        if (typeof y !== 'undefined') {
            x = x + y;
            console.log(arguments)
            return arguments.callee;
        } else {
            return x;
        }   
    };
}
add(1)(2)(3)(); //6
add(1)(1)(1)(1)(1)(1)(); //6