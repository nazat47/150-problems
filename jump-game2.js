function minJumps(nums) {
  let jump = 0;
  let currMax = 0;
  let currEnd = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    currMax = Math.max(currMax, i + nums[i]);
    if (i === currEnd) {
      currEnd = currMax;
      jump++;
    }
  }
  return jump;
}

console.log(minJumps([2, 3, 1, 1, 4])); 