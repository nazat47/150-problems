function jump(nums) {
  let final = nums.length - 1
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= final) {
      final = i;
    }
  }
  return final === 0;
}

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([3, 2, 1, 0, 4]));