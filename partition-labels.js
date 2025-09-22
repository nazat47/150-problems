// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears 
// in at most one part. For example, the string "ababcc" can be partitioned into ["abab", "cc"], but partitions such 
// as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

 

// Example 1:

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.


function canPartitionSubsets(s) {
  let pStart = 0;
  let pEnd = 0;
  let lastOccurrences = [];
  let res = [];

  for (let i = 0; i < s.length; i++) {
    lastOccurrences[s.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }

  for (let i = 0; i < s.length; i++) {
    pEnd = Math.max(pEnd, lastOccurrences[s.charCodeAt(i) - "a".charCodeAt(0)]);
    if (i === pEnd) {
      res.push(pEnd - pStart + 1);
      pStart = i + 1;
    }
  }
  return res;
}

console.log(canPartitionSubsets("aabbcd")); 