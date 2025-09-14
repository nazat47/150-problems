function rainWaterSwim(grid) {
  let n = grid.length;
  let left = grid[0][0];
  let right = n * n - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (canSwim(grid, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function canSwim(grid, t) {
  let n = grid.length;
  let visited = Array.from({ length: n }, () => Array(n).fill(false));
  return dfs(grid, t, 0, 0, visited);
}

function dfs(grid, t, i, j, visited) {
  let n = grid.length;
  if (i < 0 || i >= n || j < 0 || j >= n || visited[i][j] || grid[i][j] > t) {
    return false;
  }
  if (i === n - 1 && j === n - 1) {
    return true;
  }
  visited[i][j] = true;
  return (
    dfs(grid, t, i + 1, j, visited) ||
    dfs(grid, t, i - 1, j, visited) ||
    dfs(grid, t, i, j + 1, visited) ||
    dfs(grid, t, i, j - 1, visited)
  );
}

console.log(
  rainWaterSwim([
    [0, 1, 0],
    [1, 5, 1],
    [0, 4, 3],
  ])
);
