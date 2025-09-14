let digitsToLetters = [
  "",
  "",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz",
];

function letterCombinations(digits) {
  let res = [];
  if (digits.length === 0) {
    return res;
  }
  backtrack(digits, res, "", 0);
  return res;
}

function backtrack(digits, res, currCombination, index) {
  if (index === digits.length) {
    res.push(currCombination);
    return;
  }
  const letters = digitsToLetters[digits[index]];
  for (const letter of letters) {
    backtrack(digits, res, currCombination + letter, index + 1);
  }
}

console.log(letterCombinations([2, 3, 4]));
