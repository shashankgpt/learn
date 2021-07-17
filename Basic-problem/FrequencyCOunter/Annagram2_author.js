function sameCheck2(val,val2){
    const obj1={};
    for(let i=0;i<val.length;i++){
        obj1[val[i]] = (obj1[val[i]] || 0)+1;
    }
    for(let i=0;i<val2.length;i++){
        if(obj1[val2[i]]){
            obj1[val2[i]] =obj1[val2[i]]-1;
        } else{
        return false;
        }
    }
    return true;
}

// sameCheck2('aaz','zza')
sameCheck('qwerty','qeywrt')