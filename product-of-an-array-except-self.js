// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the
//  elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]


function productOfArrayExceptSelf(arr) {
  let result = new Array(arr.length).fill(1);
  let pre = 1;
  let post = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = pre;
    pre = pre * arr[i];
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= post;
    post = arr[i] * post;
  }

  return result;
}

console.log(productOfArrayExceptSelf([1, 2, 3, 4]));
