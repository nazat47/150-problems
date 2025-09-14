function decodeWays(s) {
  if (s[0] === "0") return 0;

  let prev1 = 1;
  let prev2 = 1;
  for (let i = 1; i < s.length; i++) {
    let current = 0;
    if (s[i] !== "0") {
      current = prev1;
    }
    let val = s.substring(i - 1, i + 1);
    if (val >= 10 && val <= 26) {
      current = current + prev2;
    }
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}

console.log(decodeWays("2012"));
