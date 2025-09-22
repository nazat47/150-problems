// You are given a 
// m
// ×
// n
// m×n 2D grid initialized with these three possible values:

// -1 - A water cell that can not be traversed.
// 0 - A treasure chest.
// INF - A land cell that can be traversed. We use the integer 2^31 - 1 = 2147483647 to represent INF.
// Fill each land cell with the distance to its nearest treasure chest. If a land cell cannot reach a treasure chest 
// then the value should remain INF.

// Assume the grid can only be traversed up, down, left, or right.

// Modify the grid in-place.

// Example 1:

// Input: [
//   [2147483647,-1,0,2147483647],
//   [2147483647,2147483647,2147483647,-1],
//   [2147483647,-1,2147483647,-1],
//   [0,-1,2147483647,2147483647]
// ]

// Output: [
//   [3,-1,0,1],
//   [2,2,1,-1],
//   [1,-1,2,-1],
//   [0,-1,3,4]
// ]


function wallsAndGates(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) return -1;

  let queue = [];
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (queue.length > 0) {
    let area = queue.shift();
    const row = area[0];
    const col = area[1];
    for (let dir of directions) {
      const newRow = row + dir[0];
      const newCol = col + dir[1];
      if (
        newRow >= 0 &&
        newRow < m &&
        newCol >= 0 &&
        newCol < n &&
        grid[newRow][newCol] === Infinity
      ) {
        grid[newRow][newCol] = grid[row][col] + 1;
        queue.push([newRow, newCol]);
      }
    }
  }
}

let board = [
  [Infinity, -1, 0, Infinity],
  [Infinity, Infinity, Infinity, -1],
  [Infinity, -1, Infinity, -1],
  [0, -1, Infinity, Infinity],
];

wallsAndGates(board);
console.log(board);
