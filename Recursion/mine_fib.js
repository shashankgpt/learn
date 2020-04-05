function fib(n){
    const result = [1,1];
    function getValue(val){
        if(val.length ===n)
        {
            return val
        }
        else {
            result.push(val[val.length-1]+val[val.length-2])
        }
        getValue(result);
    }
    if(result.length <=n)
        getValue(result);
    return result.pop();
}
fib(4);