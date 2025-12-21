function secondLargest(nums) {
    if (nums.length < 2) {
        return -1;
    }
    let largest = -Infinity;
    let secondLargest = -Infinity
    for (let i =0;i<nums.length;i++) {
        if (largest < nums[i]) {
            secondLargest = largest
            largest = nums[i]
        } else if (secondLargest < nums[i] && largest > nums[i]) {
            secondLargest = nums[i]
        }
    }
    if (largest === secondLargest || secondLargest === -Infinity) {
            return -1;
        }
        return secondLargest
}

console.log(secondLargest( [7,7,2,,10,2,10,10,10]))