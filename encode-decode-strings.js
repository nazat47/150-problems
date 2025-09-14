function encode(str) {
  if (str.length === 0) return "";

  let seperator = "#";
  let result = "";

  for (const char of str) {
    result += char + seperator;
  }
  return result.slice(0, -1);
}

function decode(str) {
  if (str.length === 0) return [];
  let seperator = "#";
  return str.split(seperator);
}

let str = ["abc", "ab", "dec"];
const encodedString = encode(str);
console.log(decode(encodedString));
