function maxSubarraySum(arr,pair){
let sum = 0;
for(let i =0;i<pair;i++)
{
    sum += arr[i]
}
let temp = sum;
for(let i=0;i<arr.length-pair;i++)
{
    temp = temp+arr[i+pair]-arr[i];
    if(temp > sum)
    {
        sum = temp

    }
}
return sum;
}
maxSubarraySum([100,200,300,400],2)