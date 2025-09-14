function regMatch(s, p) {
  if (!s || !p) return null;
  const dp = Array.from({ length: s.length + 1 }, () =>
    Array(p.length + 1).fill(false)
  );
  dp[0][0] = true;
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "*" && dp[0][i - 1]) {
      dp[0][i + 1] = true;
    }
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < p.length; j++) {
      if (p[j] === "." || p[j] === s[i]) {
        dp[i + 1][j + 1] = dp[i][j];
      }
      if (p[j] === "*") {
        if (p[j-1] !== s[i] && p[j-1] !== ".") {
          dp[i + 1][j + 1] = dp[i + 1][j - 1];
        } else {
          dp[i + 1][j + 1] = dp[i + 1][j] || dp[i + 1][j - 1] || dp[i][j + 1];
        }
      }
    }
  }
  return dp[s.length][p.length];
}

console.log(regMatch("aab", "c*a*.")); 