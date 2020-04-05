function someRecursive(arr,cb){
 if(arr.length===0) {
     return false;
 }
 let val = arr.pop()
  if(cb(val)) {
      return true;
      }
  else {
    someRecursive(arr,cb);
  }
}
someRecursive([1,2,3,4],(val)=>val%2 !== 0)