class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.map = new Map();
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  insertAtHead(node) {
    node.next = this.head.next;
    node.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    let node = this.map.get(key);
    this.remove(node);
    this.insertAtHead(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      node.value = value;
      this.remove(node);
      this.insertAtHead(node);
    } else {
      if (this.map.size === this.capacity) {
        this.remove(this.tail.prev);
        this.map.delete(this.tail.prev.key);
      }
      let node = new Node(key, value);
      this.map.set(key, node);

      this.insertAtHead(node);
    }
  }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3);
cache.put(4, 4);
cache.put(5, 5);
console.log(cache.get(1));
console.log(cache.get(2));
console.log(cache.get(5));
