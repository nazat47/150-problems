function longestConsecutiveSubsequence(arr) {
  if (arr.length === 0) return 0;

  let set = new Set();
  let lcs = 0;

  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] - 1)) {
      continue;
    } else {
      let curr = arr[i];
      let currentLCS = 1;
      while (set.has(curr + 1)) {
        curr = curr + 1;
        currentLCS++;
      }
      lcs = Math.max(lcs, currentLCS);
    }
  }

  return lcs;
}
console.log(longestConsecutiveSubsequence([100, 4, 200, 1, 3, 2]));
