let fullboard = [];
let rows = 0;
let cols = 0;

function wordExists(board, word) {
  fullboard = board;
  rows = board.length;
  cols = board[0].length;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (backtrack(i, j, fullboard, word, 0)) {
        return true;
      }
    }
  }
  return false;
}

function backtrack(row, col, board, word, index) {
  if (index >= word.length) return true;
  if (
    row < 0 ||
    row >= rows ||
    col < 0 ||
    col >= cols ||
    board[row][col] !== word[index]
  ) {
    return false;
  }

  fullboard[row][col] = "#";

  const rowDir = [-1, 0, 1, 0];
  const colDir = [0, 1, 0, -1];

  let ret = false;

  for (let i = 0; i < 4; i++) {
    ret = backtrack(row + rowDir[i], col + colDir[i], board, word, index + 1);
    if (ret) break;
  }
  fullboard[row][col] = word[index];
  return ret;
}

console.log(
  wordExists(
    [
      ["s", "p", "d"],
      ["s", "p", "i"],
      ["r", "e", "d"],
    ],
    "spider"
  )
);
