function permute(nums) {
  let res = [];
  let used = [];
  bactrack(nums, res, used, []);
  return res;
}

function bactrack(nums, res, used, curr) {
  if (curr.length === nums.length) {
    res.push([...curr]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!used[i]) {
      curr.push(nums[i]);
      used[i] = true;
      bactrack(nums, res, used, curr);
      used[i] = false;
      curr.pop();
    }
  }
}

console.log(permute([1, 2, 3]));
