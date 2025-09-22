// Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.


function maxSubArray(arr) {
  let curr = 0;
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (curr < 0) {
      curr = 0;
    }
    curr += arr[i];
    max = Math.max(max, curr);
  }
  return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));