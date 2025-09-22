// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric
//  characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.


function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !/^[a-zA-Z]$/.test(s[left])) {
      left++;
    }
    while (left < right && !/^[a-zA-Z]$/.test(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(validPalindrome("A man, a plan, a canal: Panama"));
