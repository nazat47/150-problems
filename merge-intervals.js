// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an
//  array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let ans = [];
  for (let interval of intervals) {
    if (ans.length === 0 || ans[ans.length - 1][1] < interval[0]) {
      ans.push(interval);
    } else {
      ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], interval[1]);
    }
  }
  return ans;
}

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
