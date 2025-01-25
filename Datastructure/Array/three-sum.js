const a = [12, 3, 1, 2, -6, 5, -8, 6];
const target = 0;

const threeSum = (arr, s) => {
  let target = [];
  if (arr.length < 3) {
    return target;
  }
  arr.sort((a, b) => a - b);
  for (let pivot = 0; pivot < arr.length; pivot++) {
    let left = pivot + 1;
    let right = arr.length - 1;
    let sum = arr[pivot] + arr[left] + arr[right];
    while (left < right) {
      if (sum > s) {
        right--;
      } else if (sum < s) {
        left++;
      } else {
        target.push([arr[pivot], arr[left], arr[right]]);
        left++
        right--
      }
      sum = arr[pivot] + arr[left] + arr[right];
    }
  }
  return target;
};
threeSum(a, target)

