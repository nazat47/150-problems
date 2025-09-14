function numIslands(grid) {
  let m = grid.length;
  let n = grid[0].length;

  let islands = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        islands += 1;
        dfs(grid, i, j);
      }
    }
  }
  return islands;
}

function dfs(grid, row, col) {
  let m = grid.length;
  let n = grid[0].length;

  if (row < 0 || col < 0 || row >= m || col >= n || grid[row][col] === 0)
    return;

  grid[row][col] = 0;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (const dir of directions) {
    dfs(grid, row + dir[0], col + dir[1]);
  }
}

console.log(
  numIslands([
    [1, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
  ])
);
