// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a 
// dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, 
// and false otherwise.
 

// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]


class TrieNode {
  constructor() {
    this.links = new Array(26).fill(null);
    this.isEnd = false;
  }

  containsKey(ch) {
    return this.links[ch.charCodeAt(0) - "a".charCodeAt(0)] !== null;
  }

  get(ch) {
    return this.links[ch.charCodeAt(0) - "a".charCodeAt(0)];
  }

  put(ch, node) {
    this.links[ch.charCodeAt(0) - "a".charCodeAt(0)] = node;
  }

  setEnd() {
    this.isEnd = true;
  }

  isEnd() {
    return this.isEnd;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.containsKey(char)) {
        node.put(char, new TrieNode());
      }
      node = node.get(char);
    }
    node.isEnd = true;
  }

  searchPrefix(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (node.containsKey(word[i])) {
        node = node.get(word[i]);
      } else {
        node = null;
      }
    }
    return node;
  }

  search(word) {
    const node = this.searchPrefix(word);
    return !!node && node.isEnd;
  }

  startsWith(prefix) {
    const node = this.searchPrefix(prefix);
    return !!node;
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("ap");
trie.insert("pear");
trie.insert("por");

console.log(trie.search("app"));
console.log(trie.startsWith("ap"));
console.log(trie.search("pearl"));
