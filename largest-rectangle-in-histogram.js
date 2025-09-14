//problem: https://leetcode.com/problems/largest-rectangle-in-histogram/

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
