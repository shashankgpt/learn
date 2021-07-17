function findLongestSubstringTest2(str){
let len = 0
if(str.length ===0) return len;
let obj = {};
let k =0;
let temp = len;
for(let i=0;i<str.length;i++)
{
    while(obj[str[i]])
    {
        console.log({...obj},temp);
        // temp= Object.keys(obj).length;
         obj[str[k]] = obj[str[k]]-1;
        k++
         temp--
    }
    obj[str[i]] =(obj[str[i]] || 0)+1;
    temp++
    if(len < temp)
    {
        len = temp;
    }
}
return len;
}

findLongestSubstringTest2('longestsubstring');
