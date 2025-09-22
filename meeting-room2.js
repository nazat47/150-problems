// Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] 
// (start_i < end_i), find the minimum number of days required to schedule all meetings without any conflicts.

// Note: (0,8),(8,10) is not considered a conflict at 8.

// Example 1:

// Input: intervals = [(0,40),(5,10),(15,20)]

// Output: 2
// Explanation:
// day1: (0,40)
// day2: (5,10),(15,20)


function numOfConferenceRooms(meetings) {
  if (meetings.length === 0) return 0;

  let starts = [];
  let ends = [];
  for (let i = 0; i < meetings.length; i++) {
    starts.push(meetings[i][0]);
    ends.push(meetings[i][1]);
  }

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);
  let res = 0;
  let startPtr = 0;
  let endPtr = 0;

  while (startPtr < starts.length) {
    if (starts[startPtr] >= ends[endPtr]) {
      endPtr++;
      res--;
    }
    res++;
    startPtr++;
  }
  return res;
}

console.log(
  numOfConferenceRooms([
    [9, 15],
    [15, 20],
    [0, 10],
  ])
);
