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
