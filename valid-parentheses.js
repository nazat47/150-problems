// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true


function validParentheses(s) {
  const map = new Map();

  map.set(")", "(");
  map.set("}", "{");
  map.set("]", "[");
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (!map.has(c)) {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const poppedChar = stack.pop();
      if (map.get(c) !== poppedChar) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(validParentheses("()"));
console.log(validParentheses("()[]{}"));
console.log(validParentheses("([)]"));
console.log(validParentheses("{[]}"));
console.log(validParentheses("([{}({}[])])"));
