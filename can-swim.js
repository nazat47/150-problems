// You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).

// It starts raining, and water gradually rises over time. At time t, the water level is t, meaning any cell with 
// elevation less than equal to t is submerged or reachable.

// You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares 
// individually are at most t. You can swim infinite distances in zero time. Of course, you must stay within the boundaries
//  of the grid during your swim.

// Return the minimum time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).

// Input: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
// Output: 16
// Explanation: The final route is shown.
// We need to wait until time 16 so that (0, 0) and (4, 4) are connected.

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
