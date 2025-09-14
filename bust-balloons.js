function maxCoins(nums) {
  let n = nums.length;
  let extendedNums = [];
  extendedNums[0] = 1;
  extendedNums[n + 1] = 1;
  for (let i = 1; i <= n; i++) {
    extendedNums[i] = nums[i - 1];
  }

  const dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));

  for (let length = 1; length <= n; length++) {
    for (let left = 1; left <= n - length + 1; left++) {
      const right = left + length - 1;
      for (let i = left; i <= right; i++) {
        let coins =
          extendedNums[left - 1] * extendedNums[i] * extendedNums[right + 1];
        coins += dp[left][i - 1] + dp[i + 1][right];
        dp[left][right] = Math.max(dp[left][right], coins);
      }
    }
  }
  return dp[1][[n]];
}

console.log(maxCoins([3, 1, 5, 8]));
