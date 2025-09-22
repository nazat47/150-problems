// You are given an integer array nums and an integer target.

// You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then 
// concatenate all the integers.

// For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression
//  "+2-1".
// Return the number of different expressions that you can build, which evaluates to target.

 

// Example 1:

// Input: nums = [1,1,1,1,1], target = 3
// Output: 5
// Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3


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
