function targetSumWays(nums, target) {
  let sum = 0;
  for (let num of nums) sum += num;

  if (sum < target || (target + sum) % 2 !== 0) return 0;

  const s1 = (target + sum) / 2;

  if (s1 < 0) return 0;

  let dp = new Array(s1 + 1).fill(0);
  dp[0] = 1;
  for (let num of nums) {
    for (let j = s1; j >= num; j--) {
      dp[j] += dp[j - num];
    }
  }

  return dp[s1];
}

console.log(targetSumWays([1, 1, 1, 1, 1], 3));
