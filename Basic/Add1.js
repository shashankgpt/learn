function addUpto(n) {
    let total = 0;
    for(var i=0;i<=n;i++) {total +=i;}
    return total;
}
// better solution using math
function addUpto2(n){
    return (n*(n+1))/2
}
let t1 = performance.now();
console.log(addUpto(100000000));
let t2 = performance.now();
console.log(`First Solution took ${(t2-t1)/1000}`)

let t3 = performance.now();
console.log(addUpto2(100000000));
let t4 = performance.now();
console.log(`Second Solution took ${(t4-t3)/1000}`)