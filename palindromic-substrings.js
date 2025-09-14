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
