function longestRepeating(str, k) {
  let left = 0;
  let right = 0;
  let ans = 0;
  let occurance = Array(26).fill(0);
  let maxOccurance = 0;

  for (right; right < str.length; right++) {
    maxOccurance = Math.max(
      maxOccurance,
      ++occurance[str[right].charCodeAt(0) - "a".charCodeAt(0)]
    );

    if (right - left + 1 - maxOccurance > k) {
      occurance[str[left].charCodeAt(0) - "a".charCodeAt(0)]--;
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}

console.log(longestRepeating("abab", 2));
