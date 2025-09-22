// Given an integer array nums, return true if any value appears at least twice in the array, and 
// return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.


function containsDuplicate(arr) {
  const set = new Set();
  for (let el of arr) {
    if (set.has(el)) {
      return true;
    }
    set.add(el);
  }
  return false;
}

const arr = [1, 2, 3, 4, 4, 5];
console.log(containsDuplicate(arr));
