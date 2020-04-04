function solution(arr){
    let i =0
    let j=arr.length-1;
    while(i<j){
        const sum =arr[i]+arr[j]; 
        console.log(sum);
        if(sum===0)
        return [arr[i],arr[j]]
       else if(sum < 0)
       {
           j--
       }
       else{
       i++
       }
    }
 return false;  
}
console.log(solution([3,2,1,0,-1,-5,-6]))