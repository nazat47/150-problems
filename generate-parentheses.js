function generateParenthesis(n) {
  let ans = [];
  backtrack(ans, "", 0, 0, n);
  return ans;
}

function backtrack(ans, curr, open, close, max) {
  if (curr.length === max * 2) {
    ans.push(curr);
    return;
  }
  if (open < max) {
    curr += "(";
    backtrack(ans, curr, open + 1, close, max);
    curr = curr.slice(0, -1);
  }
  if (close < open) {
    curr += ")";
    backtrack(ans, curr, open, close + 1, max);
    curr = curr.slice(0, -1);
  }
}

console.log(generateParenthesis(3));
