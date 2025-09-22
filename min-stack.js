// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

 

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

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
