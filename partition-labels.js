function canPartitionSubsets(s) {
  let pStart = 0;
  let pEnd = 0;
  let lastOccurrences = [];
  let res = [];

  for (let i = 0; i < s.length; i++) {
    lastOccurrences[s.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }

  for (let i = 0; i < s.length; i++) {
    pEnd = Math.max(pEnd, lastOccurrences[s.charCodeAt(i) - "a".charCodeAt(0)]);
    if (i === pEnd) {
      res.push(pEnd - pStart + 1);
      pStart = i + 1;
    }
  }
  return res;
}

console.log(canPartitionSubsets("aabbcd")); 