// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

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
