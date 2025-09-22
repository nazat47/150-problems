// Given an m x n matrix, return all elements of the matrix in spiral order.
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

function spiralMatrix(matrix) {
  let ans = [];
  let currDirection = 0;
  let changedDirection = 0;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let row = 0;
  let col = 0;
  let visited = "#";
  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  ans.push(matrix[0][0]);
  matrix[0][0] = visited;
  while (changedDirection < 2) {
    while (
      row + dirs[currDirection][0] >= 0 &&
      row + dirs[currDirection][0] < rows &&
      col + dirs[currDirection][1] >= 0 &&
      col + dirs[currDirection][1] < cols &&
      matrix[row + dirs[currDirection][0]][col + dirs[currDirection][1]] !==
        visited
    ) {
      changedDirection = 0;
      row = row + dirs[currDirection][0];
      col = col + dirs[currDirection][1];
      ans.push(matrix[row][col]);
      matrix[row][col] = visited;
    }
    currDirection = (currDirection + 1) % 4;
    changedDirection++;
  }
  return ans;
}

console.log(spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));