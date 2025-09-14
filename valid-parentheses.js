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
