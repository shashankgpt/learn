/** Longest Consecutive Subsequence */
function subseq(arr, n) {
    arr.sort((a,b) => a-b);
    let count =1;
    const maxCount = [];
    let answer = arr[0];
    for (let i=1;i<n;i++) {
        //console.log(i, arr[i], answer, count)
        if (arr[i] === answer + count || arr[i] === answer) {
            count++
        } else {
            maxCount.push(count)
            count =1;
            if (arr[i] === arr[j] || arr[i]-1 === arr[j]) {
                count +=1
            }
            answer = arr[i];
        }
    }
    //console.log(maxCount)
    //console.log(Math.max(...maxCount))
    return Math.max(...maxCount)
}