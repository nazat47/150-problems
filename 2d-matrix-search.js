function searchMatrix(matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let left = 0;
  let right = m * n - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let midValue = matrix[Math.floor(mid / n)][mid % n];

    if (midValue === target) {
      return mid;
    } else if (midValue > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    30
  )
);
