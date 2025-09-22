// A new alien language uses the English alphabet, but the order of letters is unknown. You are given a list of words[] from
//  the alien language’s dictionary, where the words are claimed to be sorted lexicographically according to the language’s
//  rules.

// Your task is to determine the correct order of letters in this alien language based on the given words. 
// If the order is valid, return a string containing the unique letters in lexicographically increasing order as per 
// the new language's rules. If there are multiple valid orders, return any one of them.

// However, if the given arrangement of words is inconsistent with any possible letter ordering,
//  return an empty string ("").

// A string a is lexicographically smaller than a string b if, at the first position where they differ, 
// the character in a appears earlier in the alien language than the corresponding character in b. If all 
// characters in the shorter word match the beginning of the longer word, the shorter word is considered smaller.

// Input: words[] = ["baa", "abcd", "abca", "cab", "cad"]
// Output: true
// Explanation: A possible corrct order of letters in the alien dictionary is "bdac".
// The pair "baa" and "abcd" suggests 'b' appears before 'a' in the alien dictionary.
// The pair "abcd" and "abca" suggests 'd' appears before 'a' in the alien dictionary.
// The pair "abca" and "cab" suggests 'a' appears before 'c' in the alien dictionary.
// The pair "cab" and "cad" suggests 'b' appears before 'd' in the alien dictionary.
// So, 'b' → 'd' → 'a' → 'c' is a valid ordering.

let dependencyMap = new Map();
let visited = new Map();
let output = "";

function alienOrder(words) {
  for (let word of words) {
    for (let char of word) {
      if (!dependencyMap.has(char)) {
        dependencyMap.set(char, []);
      }
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];
    if (word1.length > word2.length && word1.startsWith(word2)) {
      return "";
    }

    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      if (word1[j] !== word2[j]) {
        dependencyMap.get(word2[j]).push(word1[j]);
        break;
      }
    }
  }

  for (let c of dependencyMap.keys()) {
    let res = dfs(c);
    if (!res) return "";
  }

  if (output.length < dependencyMap.length) return "";

  return output;
}

function dfs(c) {
  if (visited.has(c)) return visited.get(c);
  visited.set(c, false);
  for (let dependency of dependencyMap.get(c)) {
    let res = dfs(dependency);
    if (!res) return false;
  }
  visited.set(c, true);
  output += c;
  return true;
}

console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]));
