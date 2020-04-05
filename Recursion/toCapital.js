function capitalizeFirst (arr) {
    const result = [];
    if(arr.length ===0)
     return result;
 else {
     let string = arr[0];
     return [string.toUpperCase()].concat(capitalizeFirst(arr.slice(1))) 
 }
}
capitalizeFirst(['shashank','gupta'])