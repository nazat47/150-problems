// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true


function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  const charCounts = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    charCounts[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    charCounts[t[i].charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  for (let count of charCounts) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("cart", "ratc"));
