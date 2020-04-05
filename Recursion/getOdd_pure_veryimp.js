function collectOdd(arr)
{
    let newData=[];
    if(arr.length===0)
    return newData;
    else if(arr[0]%2 !==0)
    {
        newData.push(arr[0])
    }
    newData = [...newData,...(collectOdd(arr.slice(1)))]
    return newData;
}

collectOdd([1,2,3,4,5])