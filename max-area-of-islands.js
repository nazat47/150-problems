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
