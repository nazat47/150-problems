// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

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
