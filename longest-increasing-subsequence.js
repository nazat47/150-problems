// Given an integer array nums, return the length of the longest strictly increasing subsequence.

 

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.


function longestIncreasingSubsequence(nums) {
  let dp = new Array(nums.length).fill(1);
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
        max = Math.max(max, dp[i]);
      }
    }
  }
  return max;
}

console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));

//--------OPTIMIZED VERSION(nlogn)--------
function longestIncreasingSubsequenceOptimized(nums) {
  let sub = [];
  sub.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > sub[sub.length - 1]) {
      sub.push(nums[i]);
    } else {
      let j = binarySearch(sub, nums[i]);
      sub[j] = nums[i];
    }
  }
  return sub.length;
}

function binarySearch(sub, num) {
  let left = 0;
  let right = sub.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (sub[mid] === num) {
      return mid;
    }
    if (sub[mid] > num) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(
  longestIncreasingSubsequenceOptimized([10, 9, 2, 5, 3, 7, 101, 18])
);
