// get the sum largest sum of pair

function sumPair(arr,pair) {
    if(arr.length < pair)
    return null;
let sum = 0;
for(let i=0;i<arr.length-pair;i++){
    let newSum = arr[i]
    for(let j=i+1;j<i+pair;j++)
    {
            newSum +=arr[j]
    }
    if(newSum > sum)
    {
        sum = newSum;
    }
}
return sum;
}

console.log(sumPair([1,2,5,2,8,1,5],2));