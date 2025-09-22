// Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] 
// (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.

// Example 1:

// Input: intervals = [(0,30),(5,10),(15,20)]

// Output: false
// Explanation:

// (0,30) and (5,10) will conflict
// (0,30) and (15,20) will conflict


function canAttendMeetings(meetings) {
  meetings.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < meetings.length - 1; i++) {
    if (meetings[i][1] > meetings[i + 1][0]) return false;
  }
  return true;
}

console.log(
  canAttendMeetings([
    [10, 15],
    [15,20],
    [0, 10],
  ])
);
