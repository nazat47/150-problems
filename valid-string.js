// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

// The following rules define a valid string:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 

// Example 1:

// Input: s = "()"
// Output: true


function isValidString(s) {
  let minOpen = 0;
  let maxOpen = 0;
  for (let char of s) {
    if (char === "(") {
      minOpen++;
      maxOpen++;
    } else if (char === ")") {
      minOpen--;
      maxOpen--;
    } else {
      maxOpen++;
      minOpen--;
    }
  }

  if (maxOpen < 0) return false;
  minOpen = Math.max(minOpen, 0);
  return minOpen === 0;
}

console.log(isValidString("(((*))"));