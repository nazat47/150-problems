//problem: https://leetcode.com/problems/3sum/

function twoSum(i, nums, res) {
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[i] + nums[left] + nums[right];
    if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    } else {
      res.push([nums[i], nums[left++], nums[right--]]);
      while (left < right && nums[left] === nums[left - 1]) {
        ++left;
      }
    }
  }
}

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      twoSum(i, nums, result);
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
