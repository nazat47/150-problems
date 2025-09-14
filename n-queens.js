function nQueens(n) {
  let board = new Array(n).fill(null).map(() => new Array(n).fill("."));
  let res = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = ".";
    }
  }
  backtrack(board, res, 0);
  return res;
}

function backtrack(board, res, col) {
  if (col === board.length) {
    res.push(construct(board));
    return;
  }

  for (let i = 0; i < board.length; i++) {
    if (isValid(board, i, col)) {
      board[i][col] = "Q";
      backtrack(board, res, col + 1);
      board[i][col] = ".";
    }
  }
}

function isValid(board, row, col) {
  for (let i = 0; i < col; i++) {
    if (board[row][i] === "Q") {
      return false;
    }
  }
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") {
      return false;
    }
  }
  for (let i = row, j = col; i < board.length && j >= 0; i++, j--) {
    if (board[i][j] === "Q") {
      return false;
    }
  }
  return true;
}

function construct(board) {
  let ans = [];
  for (let i = 0; i < board.length; i++) {
    ans.push(board[i].join(""));
  }
  return ans;
}

console.log(nQueens(4));
