function twoNumberSum(array, targetSum) {
    const nums = {};
    for (const num of array) {
        const potentialMatch = targetSum - num;
        if (potentialMatch in nums) {
            return [potentialMatch, num];
        }
        nums[num] = true;
    }
    return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
