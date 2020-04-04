function sameCheck(val,val2){
    const obj1={};
    const obj2={};
    for(let i=0;i<val.length;i++){
        obj1[val[i]] = (obj1[val[i]] || 0)+1;
    }
    for(let i=0;i<val.length;i++){
        obj2[val2[i]] = (obj2[val2[i]] || 0)+1;
    }
    for(let [key,value] of Object.entries(obj1)){
        if(obj2.hasOwnProperty(key)){
            if(obj2[key]===value) return true
        }
        return false;
    }
}

console.log(sameCheck('aaz','zza'))
sameCheck('qwerty','qeywrt')
