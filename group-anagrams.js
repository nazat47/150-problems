function groupAnagrams(strs) {
  const arr = new Array(26);
  const map = new Map();

  for (const str of strs) {
    arr.fill(0);
    for (const char of str) {
      arr[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    let s = "";

    for (let i = 0; i < arr.length; i++) {
      s += arr[i].toString();
    }

    if (!map.has(s)) {
      map.set(s, []);
    }
    map.get(s).push(str);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
