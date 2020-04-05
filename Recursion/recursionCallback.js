function check(arr,cb){
    let result = false;
    function check2(arr,cb){
     let val = arr.pop();
    if(cb(val)){
        result= true;
    }
    else if(arr.length !==0){
        check2(arr,cb)
    }
    else {
        return
    }
    }
check2(arr,cb);
return result;
}
check([1,2,3,4],(val)=> val%2!==0);
