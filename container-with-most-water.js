// You are given an integer array height of length n. There are n vertical lines drawn such that the two 
// endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
// In this case, the max area of water (blue section) the container can contain is 49.

function maxArea(heights) {
  let maxArea = Number.MIN_VALUE;
  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    let minHeight = Math.min(heights[left], heights[right]);
    let width = right - left;
    let area = minHeight * width;
    maxArea = Math.max(maxArea, area);
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
