function maxProductSubArray(nums) {
  if (nums.length === 0) return 0;
  let max = nums[0];
  let min = nums[0];
  let res = max;
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    const temp = Math.max(curr, max * curr, min * curr);
    min = Math.min(curr, max * curr, min * curr);
    max = temp;
    res = Math.max(res, max);
  }
  return res;
}

console.log(maxProductSubArray([1, 2, 3, -2, 4]));
