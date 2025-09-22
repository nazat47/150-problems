// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT
//  allocate another 2D matrix and do the rotation

//  Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

function rotateImage(matrix) {
  let n = matrix.length;
  for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      let temp = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
      matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotateImage(matrix);
console.log(matrix);
