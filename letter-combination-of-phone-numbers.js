// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could 
// represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

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
