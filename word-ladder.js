// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words
//  beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest
//  transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.


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
