// You are given a string s and an integer k. You can choose any character of the string and change it to any other
//  uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

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
