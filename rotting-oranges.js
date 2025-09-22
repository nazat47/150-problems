// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

function rottingOranges(grid) {
  if (!grid || grid.length === 0) return -1;
  let freshCount = 0;
  let queue = [];

  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        freshCount++;
      } else if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  let minutes = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let rotten = queue.shift();
      for (let dir of directions) {
        let x = rotten[0] + dir[0];
        let y = rotten[1] + dir[1];
        if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 1) {
          freshCount--;
          grid[x][y] = 2;
          queue.push([x, y]);
        }
      }
    }
    minutes++;
  }
  return freshCount === 0 ? minutes - 1 : -1;
}

let board = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

console.log(rottingOranges(board));
