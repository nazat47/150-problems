// Given a string s, find the longest palindromic subsequence's length in s.

// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

 

// Example 1:

// Input: s = "bbbab"
// Output: 4
// Explanation: One possible longest palindromic subsequence is "bbbb".


function longestPalindrome(s) {
  if (!s || !s.length) return "";

  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = calculatePalindrome(s, i, i);
    let len2 = calculatePalindrome(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > right - left) {
      left = i - Math.floor((len - 1) / 2);
      right = i + Math.floor(len / 2);
    }
  }
  return s.substring(left, right + 1);
}

function calculatePalindrome(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

console.log(longestPalindrome("babadda"));
