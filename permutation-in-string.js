function permutation(str1, str2) {
  let s1Map = new Array(26).fill(0);
  let s2Map = new Array(26).fill(0);

  for (let i = 0; i < str1.length; i++) {
    s1Map[str1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    s2Map[str2[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < str2.length - str1.length; i++) {
    if (matches(s1Map, s2Map)) {
      return true;
    }
    s2Map[str2[i].charCodeAt(0) - "a".charCodeAt(0)]--;
    s2Map[str2[i + str1.length].charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  return matches(s1Map, s2Map);
}

function matches(s1Map, s2Map) {
  for (let i = 0; i < 26; i++) {
    if (s1Map[i] !== s2Map[i]) {
      return false;
    }
  }
  return true;
}

console.log(permutation("abxs", "achxabsxwd"));
