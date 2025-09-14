function wallsAndGates(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) return -1;

  let queue = [];
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (queue.length > 0) {
    let area = queue.shift();
    const row = area[0];
    const col = area[1];
    for (let dir of directions) {
      const newRow = row + dir[0];
      const newCol = col + dir[1];
      if (
        newRow >= 0 &&
        newRow < m &&
        newCol >= 0 &&
        newCol < n &&
        grid[newRow][newCol] === Infinity
      ) {
        grid[newRow][newCol] = grid[row][col] + 1;
        queue.push([newRow, newCol]);
      }
    }
  }
}

let board = [
  [Infinity, -1, 0, Infinity],
  [Infinity, Infinity, Infinity, -1],
  [Infinity, -1, Infinity, -1],
  [0, -1, Infinity, Infinity],
];

wallsAndGates(board);
console.log(board);
