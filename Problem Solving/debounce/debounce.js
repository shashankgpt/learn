/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
const debounce = (func, wait) => {
  let _t = null;
  return function (...args) {
    const self = this;
    if (_t) {
        clearTimeout(_t)
    }
    _t = setTimeout(() => {
      return func.apply(self, args);
    }, wait);
    return _t;
  };
};

let i = 21;
const increment = debounce((a, b) => {
  i += a * b;
}, 10);

console.log(i);
increment(3, 7);
increment(4, 5);
console.log(i);

export default debounce;
