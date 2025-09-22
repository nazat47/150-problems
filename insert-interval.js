// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start 
// and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still 
// does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.

 

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]


function insertInterval(intervals, newInterval) {
  let newStart = newInterval[0];
  let newEnd = newInterval[1];
  let output = [];
  let left = 0;
  let right = intervals.length;
  while (left < right && newStart > intervals[left][0]) {
    output.push(intervals[left]);
    left++;
  }

  let interval = [];

  if (output.length === 0 || output[output.length - 1][1] < newStart) {
    output.push(newInterval);
  } else {
    interval = output.pop();
    interval[1] = Math.max(interval[1], newEnd);
    output.push(interval);
  }

  while (left < right) {
    interval = intervals[left];
    left++;
    let start = interval[0];
    let end = interval[1];

    if (output[output.length - 1][1] < start) {
      output.push(interval);
    } else {
      interval = output.pop();
      interval[1] = Math.max(interval[1], end);
      output.push(interval);
    }
  }
  return output
}

console.log(insertInterval([[1, 3], [6, 9]], [2, 5]));
