// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").


function permutation(str1, str2) {
  let s1Map = new Array(26).fill(0);
  let s2Map = new Array(26).fill(0);

  for (let i = 0; i < str1.length; i++) {
    s1Map[str1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    s2Map[str2[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < str2.length - str1.length; i++) {
    if (matches(s1Map, s2Map)) {
      return true;
    }
    s2Map[str2[i].charCodeAt(0) - "a".charCodeAt(0)]--;
    s2Map[str2[i + str1.length].charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  return matches(s1Map, s2Map);
}

function matches(s1Map, s2Map) {
  for (let i = 0; i < 26; i++) {
    if (s1Map[i] !== s2Map[i]) {
      return false;
    }
  }
  return true;
}

console.log(permutation("abxs", "achxabsxwd"));
