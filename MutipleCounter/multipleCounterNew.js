// count the unique values
function checkUnique(arr){
    let i =0;
    let j= 1
    while(j< arr.length){
        if(arr[i]===arr[j])
        {
            j++
        }
        else {
            i++
            arr[i] = arr[j]
            
        }
    }
    return i+1;
}
checkUnique([1,1,1,2]);