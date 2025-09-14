function minWindowSubstring(s, t) {
  if (s.length === 0 || t.length === 0 || s.length < t.length) {
    return "";
  }

  let tMap = new Map();
  for (let i = 0; i < t.length; i++) {
    tMap.set(t[i], tMap.get(t[i]) ? tMap.get(t[i]) + 1 : 1);
  }

  let substringMap = new Map();
  let left = 0;
  let right = 0;
  let ans = [-1, 0, 0];
  let required = tMap.size;
  let created = 0;

  while (right < s.length) {
    let char = s[right];
    substringMap.set(
      char,
      substringMap.get(char) ? substringMap.get(char) + 1 : 1
    );
    if (tMap.has(char) && substringMap.get(char) === tMap.get(char)) {
      created++;
    }
    while (created === required && left <= right) {
      let c = s[left];
      if (ans[0] === -1 || ans[0] >= right - left + 1) {
        ans[0] = right - left + 1;
        ans[1] = left;
        ans[2] = right;
      }

      substringMap.set(c, substringMap.get(c) - 1);
      if (tMap.has(c) && tMap.get(c) > substringMap.get(c)) {
        created--;
      }
      left++;
    }
    right++;
  }

  if (ans[0] === -1) {
    return "";
  }
  return s.substring(ans[1], ans[2] + 1);
}

console.log(minWindowSubstring("ADOBECODEBANC", "ABC"));
