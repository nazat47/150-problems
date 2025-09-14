function subsets(nums) {
  let res = [];
  nums.sort();
  backtrack(nums, res, [], 0);
  return res;
}

function backtrack(nums, res, curr, start) {
  res.push([...curr]);
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) continue;
    curr.push(nums[i]);
    backtrack(nums, res, curr, i + 1);
    curr.pop();
  }
}

console.log(subsets([1, 2, 2]));
