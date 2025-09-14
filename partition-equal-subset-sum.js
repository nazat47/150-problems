function canPartition(nums) {
  let totalSum = 0;
  for (const num of nums) {
    totalSum += num;
  }
  if (totalSum % 2 !== 0) {
    return false;
  }

  let target = totalSum / 2;
  let dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let j = target; j >= num; j--) {
      if (dp[j - num]) {
        dp[j] = true;
      }
    }
  }
  return dp[target];
}

let nums = [1, 5, 11, 5];
console.log(canPartition(nums));
