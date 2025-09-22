// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go 
// outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321

function reverse(x) {
  let rev = 0;
  while (x > 0) {
    let pop = x % 10;
    x = Math.floor(x / 10);
    if (
      rev > Math.floor(Number.MAX_SAFE_INTEGER / 10) ||
      (rev === Math.floor(Number.MAX_SAFE_INTEGER / 10) && pop > 7)
    ) {
      return 0;
    }
    if (
      rev < Math.ceil(Number.MIN_SAFE_INTEGER / 10) ||
      (rev === Math.ceil(Number.MIN_SAFE_INTEGER / 10) && pop < -8)
    ) {
      return 0;
    }
    rev = rev * 10 + pop;
  }
  return rev;
}

console.log(reverse(123)); // 321
