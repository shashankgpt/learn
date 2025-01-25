const a = [1, 2, 3, 4, 5];
/// [1,2,4,0,3,0,5,0]
// [1,2,4,3,0,0,5,0]

const zerosEnd = () => {
    if (a.length < 2) return a;
    let pointer = 0;
    for (let i =0; i<a.length;i++) {
    if(a[i] !== 3) {
        [a[i], a[pointer]] = [a[pointer], a[i]]
        pointer ++
       }
    } 
}

zerosEnd()
console.log(a)