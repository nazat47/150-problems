// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

function isOperator(token) {
  return token === "+" || token === "-" || token === "*" || token === "/";
}

function evaluate(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return Math.floor(a / b);
  }
}

function evaluateReversePolishNotation(tokens) {
  let stack = [];
  for (const token of tokens) {
    if (isOperator(token)) {
      let b = stack.pop();
      let a = stack.pop();
      let res = evaluate(token, a, b);
      stack.push(res);
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop();
}

console.log(evaluateReversePolishNotation(["2", "1", "+", "3", "*"]));
console.log(evaluateReversePolishNotation(["4", "13", "5", "/", "+"]));
