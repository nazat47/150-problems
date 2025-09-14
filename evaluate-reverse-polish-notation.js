//problem: https://leetcode.com/problems/evaluate-reverse-polish-notation/

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
