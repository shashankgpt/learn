// get the sum largest sum of pair

function sumPair4(arr,pair) {
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
while(i<arr.length-pair)
{
    console.log(tempSum);
    tempSum = tempSum - arr[i]+arr[j];
    if(tempSum > sum)
    {
        sum = tempSum;
    }
    i++
    j++
}
return sum;
}

console.log(sumPair4([2,6,9,2,1,8,5,6,3],3));