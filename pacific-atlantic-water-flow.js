// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches 
// the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] 
// represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west 
// if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent 
// to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci)
//  to both the Pacific and Atlantic oceans.

// Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
// [0,4]: [0,4] -> Pacific Ocean 
//        [0,4] -> Atlantic Ocean
// [1,3]: [1,3] -> [0,3] -> Pacific Ocean 
//        [1,3] -> [1,4] -> Atlantic Ocean
// [1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
//        [1,4] -> Atlantic Ocean
// [2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
//        [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
// [3,0]: [3,0] -> Pacific Ocean 
//        [3,0] -> [4,0] -> Atlantic Ocean
// [3,1]: [3,1] -> [3,0] -> Pacific Ocean 
//        [3,1] -> [4,1] -> Atlantic Ocean
// [4,0]: [4,0] -> Pacific Ocean 
//        [4,0] -> Atlantic Ocean
// Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.

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
