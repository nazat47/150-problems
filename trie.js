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
