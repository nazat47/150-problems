function pacificAtlantic(heights) {
  if (!heights || heights.length === 0) return 0;
  let pacificReachable = Array.from({ length: heights.length }, () =>
    new Array(heights[0].length).fill(false)
  );
  let atlanticReachable = Array.from({ length: heights.length }, () =>
    new Array(heights[0].length).fill(false)
  );

  let rows = heights.length;
  let cols = heights[0].length;

  for (let i = 0; i < rows; i++) {
    dfs(heights, i, 0, pacificReachable);
    dfs(heights, i, cols - 1, atlanticReachable);
  }
  for (let i = 0; i < cols; i++) {
    dfs(heights, 0, i, pacificReachable);
    dfs(heights, rows - 1, i, atlanticReachable);
  }

  let res = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (pacificReachable[i][j] && atlanticReachable[i][j]) {
        res.push([i, j]);
      }
    }
  }
  return res;
}

function dfs(heights, row, col, reachable) {
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  reachable[row][col] = true;
  for (const dir of directions) {
    const newRow = row + dir[0];
    const newCol = col + dir[1];
    if (
      newRow < 0 ||
      newRow >= heights.length ||
      newCol < 0 ||
      newCol >= heights[0].length
    ) {
      continue;
    }
    if (reachable[newRow][newCol]) {
      continue;
    }
    if (heights[newRow][newCol] >= heights[row][col]) {
      dfs(heights, newRow, newCol, reachable);
    }
  }
}

heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

console.log(pacificAtlantic(heights));
