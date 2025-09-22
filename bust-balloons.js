// You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by
//  an array nums. You are asked to burst all the balloons.

// If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 
// goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.

// Return the maximum coins you can collect by bursting the balloons wisely.

 

// Example 1:

// Input: nums = [3,1,5,8]
// Output: 167
// Explanation:
// nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
// coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167


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
