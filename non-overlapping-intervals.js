// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of 
// intervals you need to remove to make the rest of the intervals non-overlapping.

// Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

 

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.


function removeOverlap(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = 0;
  let count = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[prev][1] > intervals[i][0]) {
      if (intervals[prev][1] > intervals[i][1]) {
        prev = i;
      }
      count++;
    } else {
      prev = i;
    }
  }
  return count;
}

console.log(
  removeOverlap([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);
