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
