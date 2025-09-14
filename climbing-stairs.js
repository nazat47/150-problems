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
