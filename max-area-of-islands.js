// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally 
// (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

function maxAreaOfIslands(grid) {
  if (!grid || grid.length === 0) return 0;
  let maxArea = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let area = dfs(grid, i, j);
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
}

function dfs(grid, row, col) {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[row].length ||
    grid[row][col] === 0
  ) {
    return 0;
  }
  grid[row][col] = 0;
  let area = 1;
  area += dfs(grid, row + 1, col);
  area += dfs(grid, row - 1, col);
  area += dfs(grid, row, col + 1);
  area += dfs(grid, row, col - 1);
  return area;
}

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

console.log(maxAreaOfIslands(grid));
