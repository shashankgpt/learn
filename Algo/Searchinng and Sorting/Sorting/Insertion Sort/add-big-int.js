// Pending
function add(arr){
    const sum = [];
    for(let i =0; i< arr.length;i++) {
        const strinfiedNumber = arr[i];
        for(let j=strinfiedNumber.length - 1; j >= 0;j--) {
            const total = (sum[j] || 0 ) + Number(strinfiedNumber[j]);
            if(total > 9) {
                const stringfiedTotal = total.toString();
                let iterator = 0;
                for(let k = stringfiedTotal.length -1; k >= 0; k--) {
                    sum[j-iterator] = Number(strinfiedNumber[k]);
                    iterator++;
                }
            } else {
                sum[j] = total;
            }
           
        }
    }
    return sum;
}

// console.log(add(['1000000001','1000900002', '1006000003', '1000100004', '1000000009']));
console.log(add(["1001458909", "1004570889", "1007019111", "1003302837", "1002514638", "1006431461", "1002575010", "1007514041", "1007548981", "1004402249"
]))
