// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, 
// return the area of the largest rectangle in the histogram.

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

function largestRectangleArea(heights) {
  let maxArea = 0;
  let stack = [];
  let n = heights.length;
  for (let i = 0; i <= n; i++) {
    let currHeight = i === n ? 0 : heights[i];
    while (stack.length > 0 && currHeight < heights[stack[stack.length - 1]]) {
      let height = heights[stack.pop()];
      let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, width * height);
    }
    stack.push(i);
  }
  return maxArea;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
