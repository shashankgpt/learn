// Return first pair whose sum add upto zero

function naiveSolution(arr){
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j< arr.length;j++)
        {
            if(arr[i]+arr[j]===0)
            {
                return [arr[i],arr[j]]
            }
        }
    }
}

naiveSolution([3,2,1,0,-1,-5,-6])

