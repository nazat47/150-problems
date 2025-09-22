// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common 
// subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none)
//  deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

 

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.


function lcs(s1, s2) {
  let m = s1.length;
  let n = s2.length;
  let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i] === s2[j]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}

console.log(lcs("AGGTAB", "GXTXAYB"));
