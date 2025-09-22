// You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

// Connect: A cell is connected to adjacent cells horizontally or vertically.
// Region: To form a region connect every 'O' cell.
// Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region
//  cells are on the edge of the board.
// To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return
//  anything.

 

// Example 1:

// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]


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
