var removeDuplicates = function(nums) {
    let p = 1;
    for (let i=1; i<nums.length;i++) {
        if (nums[i] != nums[p-1]) {
            nums[p] = nums[i]
            p++
        }
    }
return p
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))