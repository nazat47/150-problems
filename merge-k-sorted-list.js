// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted linked list:
// 1->1->2->3->4->4->5->6

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return root;
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0 && this.heap[this.parent(index)] > this.heap[index]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  bubbleDown() {
    let index = 0;
    while (this.leftChild(index) < this.heap.length) {
      let smallerChild = this.leftChild(index);

      if (
        this.rightChild(index) < this.heap.length &&
        this.heap[this.rightChild(index)] < this.heap[smallerChild]
      ) {
        smallerChild = this.rightChild(index);
      }

      if (this.heap[index] <= this.heap[smallerChild]) break;

      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const nodex1 = new LinkedListNode(1);
const nodex3 = new LinkedListNode(3);
const nodex4 = new LinkedListNode(4);

nodex1.next = nodex3;
nodex3.next = nodex4;

const nodey1 = new LinkedListNode(1);
const nodey2 = new LinkedListNode(2);
const nodey3 = new LinkedListNode(4);
const nodey4 = new LinkedListNode(5);
const nodey5 = new LinkedListNode(6);

nodey1.next = nodey2;
nodey2.next = nodey3;
nodey3.next = nodey4;
nodey4.next = nodey5;

function mergeKSortedLists(lists) {
  let heap = new MinHeap();
  for (let list of lists) {
    while (list) {
      heap.push(list.val);
      list = list.next;
    }
  }

  let dummy = new LinkedListNode(0);
  let merge = dummy;
  while (!heap.isEmpty()) {
    merge.next = new LinkedListNode(heap.pop());
    merge = merge.next;
  }
  return dummy.next;
}

console.log(mergeKSortedLists([nodex1, nodey1]));
