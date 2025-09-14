const dirs = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function longestIncreasingPath(matrix) {
  if (matrix.length === 0) return 0;
  let m = matrix.length;
  let n = matrix[0].length;
  let dp = Array.from({ length: m }, () => Array(n).fill(0));
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans = Math.max(ans, dfs(matrix, i, j, dp));
    }
  }
  return ans;
}

function dfs(matrix, i, j, dp) {
  if (dp[i][j] !== 0) return dp[i][j];
  for (const [dx, dy] of dirs) {
    const x = i + dx;
    const y = j + dy;
    if (
      x >= 0 &&
      x < matrix.length &&
      y >= 0 &&
      y < matrix[0].length &&
      matrix[x][y] > matrix[i][j]
    ) {
      dp[i][j] = Math.max(dp[i][j], dfs(matrix, x, y, dp));
    }
  }
  return ++dp[i][j];
}

console.log(
  longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
  ])
);
