// un optimized Frequency counter

var same2 = (arr=[],arr2=[]) =>{
    if(arr2.length!=arr.length) { return false;}

for(let i=0;i<arr.length;i++){
    for(let j =0;j<arr2.length;j++)
    {
        if((arr[i] * arr[i])===arr2[j])
        {
            arr2.splice(j,1)
            break;
        }
    }
     if(arr2.length >  (arr.length-i-1)) return false;
}
return true
}

console.log(same2([1,2,3],[4,1,9]))