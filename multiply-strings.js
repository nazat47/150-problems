// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2,
//  also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"

function multiply(a, b) {
  if (a === "0" || b === "0") return "0";

  let res = Array(a.length + b.length).fill(0);
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      let digit1 = a[i] - "0";
      let digit2 = b[j] - "0";

      let mul = digit1 * digit2;
      let posLow = i + j + 1;
      let posHigh = i + j;

      let sum=mul+res[posLow]
      res[posLow] = sum % 10;
      res[posHigh] = Math.floor(sum / 10) + res[posHigh];
    }
  }
  return res.join("").replace(/^0+/, '');
}

console.log(multiply("12", "12")); 