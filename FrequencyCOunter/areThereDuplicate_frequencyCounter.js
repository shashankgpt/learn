function areThereDuplicates(...args) {
    let obj = {};
    for(let i =0;i<args.length;i++)
    {
        if(obj[args[i]])
        {
            return true;
        }
        obj[args[i]] = 1;
    }
    return false;
 }

 areThereDuplicates(1,2,3)
 areThereDuplicates(1,2,2)
 areThereDuplicates('a','b','c','a');
 