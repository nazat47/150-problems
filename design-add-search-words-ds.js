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
