function isValidSudoku(board) {
  let n = 9;

  let rows = [];
  let cols = [];
  let boxes = [];

  for (let i = 0; i < n; i++) {
    rows[i] = new Map();
    cols[i] = new Map();
    boxes[i] = new Map();
  }

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      let val = board[r][c];

      if (val === ".") {
        continue;
      }
      if (rows[r].has(val)) {
        return false;
      }

      rows[r].set(val, true);

      if (cols[c].has(val)) {
        return false;
      }

      cols[c].set(val, true);

      let idx = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (boxes[idx].has(val)) {
        return false;
      }
      boxes[idx].set(val, true);
    }
  }
  return true;
}

let board = [
  ["5", "3", ".", "7", ".", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
