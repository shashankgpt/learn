function areThereDuplication(...args)
{
    args = args.sort();
    let i= 0;
    let j =1;
    while(j<args.length)
    {
        if(args[i] !== args[j]){
            i++
            j++
            continue;
        }
        return true;
    }
    return false;
}
console.log(areThereDuplication('a','b','c','a'))