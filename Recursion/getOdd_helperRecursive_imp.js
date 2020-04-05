function getOdd(arr){
    const result = [];
    function getValue(n){
        if(n.length===0)
        return;
        else if(n[n.length-1]%2!==0){
            result.push(n[n.length-1])
        }
        n.pop();
        getValue(n);
    }
    getValue(arr)
    return result; 
}
getOdd([1,2,3,1,78,1])