// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2

// Output: [1,2]


function topKFrequent(nums, k) {
  if (k === nums.length) return nums;

  const map = new Map();

  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 0);
    }
    map.set(num, map.get(num) + 1);
  }

  const arr = Array.from(map.entries());

  arr.sort((a, b) => b[1] - a[1]);

  return arr.slice(0, k).map((a) => a[0]);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
