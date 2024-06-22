const arr = [64, 34, 25, 12, 22, 11, 90];

const sort = (a) => {
    let len = a.length;
    for(let i =0; i<len;i++) {
        for(let j =0; j<len-1;j++) {
            if(arr[j] > arr[j+1])
             [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
    return a;
}

console.log(sort(arr));