function rob(nums) {
  let rob1 = 0;
  let rob2 = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(rob1 + nums[i], rob2);
    rob1 = rob2;
    rob2 = max;
  }
  return max;
}

console.log(rob([2, 3, 2, 7, 9, 3, 1]));
