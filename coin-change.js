function coinChange(coins, amount) {
  let amt = new Array(amount + 1).fill(amount + 1);
  amt[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        amt[i] = Math.min(amt[i], 1 + amt[i - coins[j]]);
      }
    }
  }
  if (amt[amount] < amount + 1) {
    return amt[amount];
  }
  return -1;
}

console.log(coinChange([1, 2, 5], 11));
