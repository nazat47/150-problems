function lengthOfLongestSubstring(s) {
  if (!s || s.length === 0) return 0;
  if (s.length === 1) return 1;

  let set = new Set();
  let left = 0;
  let right = 0;
  let ans = 0;
  while (right < s.length) {
    let char = s[right];
    while (set.has(char)) {
      set.delete(char);
      left++;
    }
    ans = Math.max(ans, right - left + 1);
    set.add(char);
    right++;
  }
  return ans;
}

console.log(lengthOfLongestSubstring("abcabcrbb"));
