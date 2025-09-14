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
