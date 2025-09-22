// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false 
// otherwise. word may contain dots '.' where dots can be matched with any letter.
 

// Example:

// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad");
// wordDictionary.search("bad"); 
// wordDictionary.search(".ad"); 


class TrieNode {
  constructor() {
    this.children = new Map();
    this.word = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  add(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.children.has(word[i])) {
        node.children.set(word[i], new TrieNode());
      }
      node = node.children.get(word[i]);
    }
    node.word = true;
  }

  searchIndex(word, node) {
    for (let i = 0; i < word.length; i++) {
      if (!node.children.has(word[i])) {
        if (word[i] === ".") {
          for (const k of node.children.keys()) {
            if (this.searchIndex(word.slice(i + 1), node.children.get(k))) {
              return true;
            }
          }
        } else {
          return false;
        }
      } else {
        node = node.children.get(word[i]);
      }
    }
    return node.word;
  }

  search(word) {
    return this.searchIndex(word, this.root);
  }
}

const dictionary = new WordDictionary();
dictionary.add("bda");
dictionary.add("dad");
dictionary.add("mad");

console.log(dictionary.search(".d."));
