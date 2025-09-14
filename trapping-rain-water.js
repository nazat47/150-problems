function totalWaterUnits(heights) {
  let left = 0;
  let right = heights.length - 1;
  let total = 0;
  let leftMax = heights[left];
  let rightMax = heights[right];
  while (left < right) {
    if (heights[left] < heights[right]) {
      leftMax = Math.max(leftMax, heights[left]);
      let diff = leftMax - heights[left];
      if (diff > 0) {
        total += diff;
      }
      left++;
    } else {
      rightMax = Math.max(rightMax, heights[right]);
      let diff = rightMax - heights[right];
      if (diff > 0) {
        total += diff;
      }
      right--;
    }
  }
  return total;
}

console.log(totalWaterUnits([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
