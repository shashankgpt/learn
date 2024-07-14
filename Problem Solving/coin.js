function nonConstructibleChange(coins) {
  coins.sort((a,b) => a-b)
  let target = 1
 if (coins.length < 1) {
  return target;
 }
 while (isSumExists(coins, target, 0, coins.length)) {
  target++
 }
 return target;
}

function isSumExists(coins, target, iteration, maxLen) {
  if(coins.indexOf(target) > -1) {
    return true
   }
   if (iteration > maxLen) {
    return false
   }
   const total = coins.reduce((acc,a) => acc+a, 0); // n
   if (total < target) {
    return false
   }
  // staight sum
  let sum = 0
  const data = {};
  let len = 0;
  for (let i =0;i<maxLen;i++) { // n
    data[coins[i]] = true;
    sum += coins[i]
    if (sum === target) {
      return true;
    }
    const value = sum - target;
    if (data[value]) {
      return true
    }
    if (coins[i]< target) len++
    if (sum > target) {
      break;
    }
  }
  let value = sum - target
  if (isSumExists(coins, value, ++iteration, ++len)) {
    return true;
  }
  return false;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));