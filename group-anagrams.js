// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

function groupAnagrams(strs) {
  const arr = new Array(26);
  const map = new Map();

  for (const str of strs) {
    arr.fill(0);
    for (const char of str) {
      arr[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    let s = "";

    for (let i = 0; i < arr.length; i++) {
      s += arr[i].toString();
    }

    if (!map.has(s)) {
      map.set(s, []);
    }
    map.get(s).push(str);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
