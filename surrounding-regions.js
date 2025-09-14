function surroundingRegions(grid) {
  if (!grid || grid.length === 0) return [];
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        (i === 0 || j === 0 || i === m - 1 || j === n - 1) &&
        grid[i][j] === "O"
      ) {
        dfs(grid, i, j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "O") {
        grid[i][j] = "X";
      } else if (grid[i][j] === "#") {
        grid[i][j] = "O";
      }
    }
  }
}

function dfs(grid, row, col) {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    grid[row][col] !== "O"
  ) {
    return;
  }

  grid[row][col] = "#";

  dfs(grid, row + 1, col);
  dfs(grid, row - 1, col);
  dfs(grid, row, col + 1);
  dfs(grid, row, col - 1);
}

board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

surroundingRegions(board);
console.log(board);
