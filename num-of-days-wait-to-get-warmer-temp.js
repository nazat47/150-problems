// Given an array of integers temperatures represents the daily temperatures, return an array answer 
// such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. 
// If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

function dailyTemperature(t) {
  let ans = new Array(t.length).fill(0);
  let stack = [];
  let n = t.length;
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && t[i] > t[stack[stack.length - 1]]) {
      let idx = stack.pop();
      ans[idx] = i - idx;
    }
    stack.push(i);
  }
  return ans;
}

console.log(dailyTemperature([73, 74, 75, 71, 69, 72, 76, 73]));
