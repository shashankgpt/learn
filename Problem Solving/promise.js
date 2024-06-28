/* const a = new Promise((res, rej)=> {
    res("ok")
})

a.then((a) => console.log(a))
*/

const PENDING = 'Pending';
const FULLFILLED = 'Fullfilled';
const REJECTED = 'REJECTED'

function customPromise(executor) {
    state = PENDING;
    value = null;
    handlers = [];
    catchers = [];
    debugger;
    function resolve(val) {
        if (state === PENDING) {
            state = FULLFILLED
            value = val
            handlers.forEach(h => h(value))
        }
    }

    function rejected(err) {
        if (state === PENDING) {
            state = REJECTED;
            value = err;
            catchers.forEach(c => c(val))
        }
    }

    this.then = function(handler) {
        if (state === FULLFILLED) {
            handler(value);
        } else {
            handlers.push(handler);
        }
        return this;
    };

    this.catch = function(catcher) {
        if (state === REJECTED) {
            catcher(value);
        } else {
            catchers.push(catcher);
        }
        return this;
    };
    executor(resolve, rejected)
}

const b = new customPromise((res, rej)=> {
    res("ok")
})

b.then((a) => console.log(a))