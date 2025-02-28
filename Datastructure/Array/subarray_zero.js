function zeroSumSubarray(nums) {
  if (nums.indexOf(0) > -1) {
    return true;
  }
  const postiveNumber = nums.filter((a) => a > 0);
  const negativeNumber = nums.filter((a) => a < 0);
  if (
    postiveNumber.length === 0 ||
    negativeNumber.length === 0 ||
    nums.length === 0
  ) {
    return false;
  }
  let sum = 0
  let obj = {}
  for (let i =0;i<nums.length;i++) {
    sum = sum + nums[i]
    if (sum === 0 || obj[sum] > -1) {
        return true
    }
    obj[sum] = i
  }
  return false;
}


zeroSumSubarray([-5,-5,-2,2,3])