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
