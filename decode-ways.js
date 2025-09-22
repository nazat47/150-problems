// You have intercepted a secret message encoded as a string of numbers. The message is decoded via the following mapping:

// "1" -> 'A'

// "2" -> 'B'

// ...

// "25" -> 'Y'

// "26" -> 'Z'

// However, while decoding the message, you realize that there are many different ways you can decode the 
// message because some codes are contained in other codes ("2" and "5" vs "25").

// For example, "11106" can be decoded into:

// "AAJF" with the grouping (1, 1, 10, 6)
// "KJF" with the grouping (11, 10, 6)
// The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).
// Note: there may be strings that are impossible to decode.

// Given a string s containing only digits, return the number of ways to decode it. If the entire string 
// cannot be decoded in any valid way, return 0.

// The test cases are generated so that the answer fits in a 32-bit integer.

 

// Example 1:

// Input: s = "12"

// Output: 2

// Explanation:

// "12" could be decoded as "AB" (1 2) or "L" (12).


function decodeWays(s) {
  if (s[0] === "0") return 0;

  let prev1 = 1;
  let prev2 = 1;
  for (let i = 1; i < s.length; i++) {
    let current = 0;
    if (s[i] !== "0") {
      current = prev1;
    }
    let val = s.substring(i - 1, i + 1);
    if (val >= 10 && val <= 26) {
      current = current + prev2;
    }
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}

console.log(decodeWays("2012"));
