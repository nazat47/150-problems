// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000

function pow(x, n) {
  let res = 1;
  let currProduct = x;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  while (n > 0) {
    if (n % 2 === 1) {
      res *= currProduct;
    }
    currProduct *= currProduct;
    n = Math.floor(n / 2);
  }
  return res;
}

console.log(pow(2, 4));
