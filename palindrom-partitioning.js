// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible 
// palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]



function palindromePartition(s) {
  let res = [];
  backtrack(res, s, [], 0);
  return res;
}

function backtrack(res, s, curr, start) {
  if (start === s.length) {
    res.push([...curr]);
    return;
  }
  for (let i = start; i < s.length; i++) {
    if (isPalindrome(s, start, i)) {
      curr.push(s.substring(start, i + 1));
      backtrack(res, s, curr, i + 1);
      curr.pop();
    }
  }
}

function isPalindrome(s, start, end) {
  while (start < end) {
    if (s[start++] !== s[end--]) {
      return false;
    }
  }
  return true;
}

console.log(palindromePartition("aab"));
