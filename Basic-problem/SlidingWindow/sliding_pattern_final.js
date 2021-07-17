// get the sum largest sum of pair

function sumPair5(arr,pair) {
    if(arr.length < pair)
    return null;
let sum = 0;
let i =0;
let j = pair;
for(let k=i;k<j;k++)
{
    sum += arr[k]
}
let tempSum = sum;
for(let i = pair;i<arr.length;i++)
{
    tempSum = tempSum + arr[i]- arr[i-pair];
    if(sum < tempSum){ sum = tempSum}
}
return sum;
}

console.log(sumPair5([2,6,9,2,1,8,5,6,3],3));