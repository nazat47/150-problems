function numOf1Bits(n) {
  let res = 0;
  while (n > 0) {
    res++;
    n = n & (n - 1);
  }
  return res;
}

console.log(numOf1Bits(3));
