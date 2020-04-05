function flaten(arr){
    const result = [];
    function check(arrNew){
    if(arr.length===0) return result;
    else{
        let val = arrNew.pop();
        if(Array.isArray(val)){
            check(val)
        }
        else{
            result.push(val);
            if(arrNew.length > 0)
                check(arrNew);
             else{
                 check(arr);
             }
        }
    }
    }
    check(arr);
    return result.reverse();
}
flaten([1,2,3,[4,5],[6],[[[7]]]])