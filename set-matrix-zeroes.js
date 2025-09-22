// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

function setMatrixZeroes(matrix) {
  let r = matrix.length;
  let c = matrix[0].length;
  let firstCol = false;
  for (let i = 0; i < r; i++) {
    if (matrix[i][0] === 0) {
      firstCol = true;
    }
    for (let j = 1; j < c; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (matrix[0][0] === 0) {
    for (let j = 0; j < c; j++) {
      matrix[0][j] = 0;
    }
  }
  if (firstCol) {
    for (let i = 0; i < r; i++) {
      matrix[i][0] = 0;
    }
  }
}

const matrix = [
  [1, 1, 0],
  [1, 0, 1],
  [1, 1, 1],
];

setMatrixZeroes(matrix);
console.log(matrix);
