class Node {
  constructor(val, minVal, next) {
    this.val = val;
    this.minVal = minVal;
    this.next = next;
  }
}

class MinStack {
  head = null;

  constructor() {
    this.head = null;
  }

  push(val) {
    if (this.head === null) {
      this.head = new Node(val, val, null);
    } else {
      this.head = new Node(val, Math.min(val, this.head.minVal), this.head);
    }
  }

  pop() {
    this.head = this.head.next;
  }

  top() {
    return this.head.val;
  }

  getMin() {
    return this.head.minVal;
  }
}

const minStack = new MinStack();
minStack.push(3);
minStack.push(5);
minStack.push(1);
minStack.push(2);
minStack.push(4);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
