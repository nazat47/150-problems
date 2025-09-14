function maxSubArray(arr) {
  let curr = 0;
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (curr < 0) {
      curr = 0;
    }
    curr += arr[i];
    max = Math.max(max, curr);
  }
  return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));