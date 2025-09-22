// You are given an integer array coins representing coins of different denominations and an integer 
// amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money 
// cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

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
