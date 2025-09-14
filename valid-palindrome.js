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
