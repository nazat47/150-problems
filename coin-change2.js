function coinChange2(coins, amount) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = i; j <= amount; j++) {
      if (j >= coins[i]) {
        dp[j] = dp[j] + dp[j - coins[i]];
      }
    }
  }
  return dp[amount]
}

console.log(coinChange2([1, 2, 5], 5));