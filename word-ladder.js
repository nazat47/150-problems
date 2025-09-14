function wordLadder(beginWord, endWord, wordList) {
  let l = beginWord.length;
  let comb = new Map();
  wordList.forEach((word) => {
    for (let i = 0; i < l; i++) {
      const newWord = word.substring(0, i) + "*" + word.substring(i + 1, l);
      if (!comb.has(newWord)) {
        comb.set(newWord, []);
      }
      comb.get(newWord).push(word);
    }
  });

  let queue = [[beginWord, 1]];
  let visited = new Set();
  visited.add(beginWord);

  while (queue.length) {
    let [word, level] = queue.shift();

    for (let i = 0; i < l; i++) {
      const newWord = word.substring(0, i) + "*" + word.substring(i + 1, l);
      for (let neighbour of comb.get(newWord) || []) {
        if (neighbour === endWord) {
          return level + 1;
        }
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          queue.push([neighbour, level + 1]);
        }
      }
    }
  }
  return 0;
}

const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(wordLadder("hit", "cog", wordList));
