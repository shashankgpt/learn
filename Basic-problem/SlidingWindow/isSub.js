function isSubsequence(val1,val2) {
    let i = 0;
    let j=0;
    while(j< val2.length && i < val1.length)
    {
        if(val1[i]===val2[j])
            {
                i++;
                j++
            }
            else {
                j++
            }
    }
    if(i===val1.length)
    {
        return true;
    }
    return false;
 }
 isSubsequence('hello','hello world')