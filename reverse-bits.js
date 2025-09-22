// Reverse bits of a given 32 bits signed integer.

 

// Example 1:

// Input: n = 43261596

// Output: 964176192

// Explanation:

// Integer	Binary
// 43261596	00000010100101000001111010011100
// 964176192	00111001011110000010100101000000



function reverseBits(n) {
  let rev = 0;
  for (let i = 0; i < 32; i++) {
    rev = rev << 1;
    rev = rev | (n & 1);
    n = n >> 1;
  }
  return rev;
}

console.log(reverseBits(3));
