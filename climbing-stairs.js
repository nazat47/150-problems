// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

function climbStairs(n) {
  if (n === 0 || n === 1) return 1;
  let prev1 = 1;
  let prev2 = 1;
  for (let i = 2; i <= n; i++) {
    let current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}

console.log(climbStairs(5));
