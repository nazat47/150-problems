function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  let ans = Number.MAX_VALUE;

  if (nums.length === 1) {
    return nums[0];
  }

  while (left <= right) {
    if (nums[left] < nums[right]) {
      ans = Math.min(ans, nums[left]);
    }
    let mid = Math.floor((right + left) / 2);
    ans = Math.min(ans, nums[mid]);
    if (nums[left] <= nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
}

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
