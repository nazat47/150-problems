function subsets(nums) {
  const res = new Array();
  generateSubsets(0, nums, [], res);
  return res;
}

function generateSubsets(index, nums, subset, res) {
  res.push([...subset]);
  for (let i = index; i < nums.length; i++) {
    subset.push(nums[i]);
    generateSubsets(i + 1, nums, subset, res);
    subset.pop();
  }
}

console.log(subsets([1, 2, 3]));
