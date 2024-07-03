/**
 * ### Problem Statement: Two Number Sum

You are given an array of integers and a target sum. Your task is to write a function that finds any two numbers in the array that add up to the target sum and returns them as a pair. If no such pair exists, the function should return an empty array.

### Input:
- An array of integers, `array`, of length \( n \) where \( 2 \leq n \leq 10^6 \).
- An integer, `targetSum`, which is the sum to be achieved by adding two distinct integers from the array.

### Output:
- An array of two integers `[num1, num2]` such that `num1 + num2 == targetSum`.
- If no such pair exists, return an empty array `[]`.

### Example:

**Example 1:**
```plaintext
Input: array = [2, 7, 11, 15], targetSum = 9
Output: [2, 7]
Explanation: 2 + 7 = 9
```

**Example 2:**
```plaintext
Input: array = [3, 2, 4], targetSum = 6
Output: [2, 4]
Explanation: 2 + 4 = 6
```

**Example 3:**
```plaintext
Input: array = [1, 2, 3, 4, 5], targetSum = 10
Output: []
Explanation: No two numbers add up to 10
```

### Constraints:
1. Each input would have exactly one solution or none.
2. The function should not modify the input array.
3. The solution should aim for optimal time and space complexity.

### Function Signature:
```javascript
function twoNumberSum(array, targetSum) {
    // Your code here
}
```

### Notes:
- You can assume that all numbers in the array are integers.
- The function should be efficient to handle the largest inputs within reasonable time limits.
 */

function twoNumberSum(array, targetSum) {
    array.sort((a,b) => a -b)
    for (let i =0; i<array.length; i++) {
        const val1 = array[i];
        const num = targetSum - val1
        for (let j =0; j<array.length;j++) {
            if (num === array[j]) {
                return [val1, array[j]]
            }
        }
    }
    return []
  }

  

  
// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
