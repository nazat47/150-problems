class TrieNode {
  constructor() {
    this.children = new Map();
    this.word = null;
  }
}

let ans = [];
let fullboard = null;

function findWords(board, words) {
  const root = new TrieNode();
  for (const word of words) {
    let node = root;
    for (const ch of word) {
      if (node.children.has(ch)) {
        node = node.children.get(ch);
      } else {
        let newNode = new TrieNode();
        node.children.set(ch, newNode);
        node = newNode;
      }
    }
    node.isEnd = word;
  }

  fullboard = board;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (root.children.has(board[i][j])) {
        backtrack(i, j, root);
      }
    }
  }
  return ans;
}

function backtrack(row, col, parent) {
  const letter = fullboard[row][col];
  let currNode = parent.children.get(letter);
  if (currNode.word !== null) {
    ans.push(parent.word);
    currNode.word = null;
  }
  fullboard[row][col] = "#";

  const rows = [-1, 0, 1, 0];
  const cols = [0, 1, 0, -1];

  for (let i = 0; i < 4; i++) {
    const newRow = row + rows[i];
    const newCol = col + cols[i];
    if (
      newCol < 0 ||
      newRow < 0 ||
      newCol >= fullboard[0].length ||
      newRow >= fullboard.length
    ) {
      continue;
    }
    if (currNode.children.has(fullboard[newRow][newCol])) {
      backtrack(newRow, newCol, currNode);
    }
  }

  fullboard[row][col] = letter;

  if (currNode.children.size === 0) {
    parent.children.delete(letter);
  }
}
