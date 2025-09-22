
// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

function countPalindromicSubstrings(s) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    ans += checkPalindrom(s, i, i);
    ans += checkPalindrom(s, i, i + 1);
  }
  return ans;
}
function checkPalindrom(s, left, right) {
  let count = 0;
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
    count++;
  }
  return count;
}

console.log(countPalindromicSubstrings("cabba"));
