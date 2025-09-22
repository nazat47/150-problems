// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. 
// Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

 

// Example 1:

// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0]; // largest value
  }

  push(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  pop() {
    if (this.size === 0) return undefined;
    const root = this.heap[0];
    const end = this.heap.pop();
    if (this.size > 0) {
      this.heap[0] = end;
      this._heapifyDown();
    }
    return root;
  }

  _heapifyUp() {
    let index = this.size - 1;
    const element = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (element <= parent) break;
      this.heap[index] = parent;
      index = parentIndex;
    }
    this.heap[index] = element;
  }

  _heapifyDown() {
    let index = 0;
    const length = this.size;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swapIndex = null;

      if (leftChildIndex < length) {
        if (this.heap[leftChildIndex] > element) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        if (
          (swapIndex === null && this.heap[rightChildIndex] > element) ||
          (swapIndex !== null &&
            this.heap[rightChildIndex] > this.heap[swapIndex])
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;
      this.heap[index] = this.heap[swapIndex];
      index = swapIndex;
    }
    this.heap[index] = element;
  }
}

function lastStoneWeight(stones) {
  let maxHeap = new MaxHeap();
  for (let i = 0; i < stones.length; i++) {
    maxHeap.push(stones[i]);
  }

  while (maxHeap.size > 1) {
    const y = maxHeap.pop();
    const x = maxHeap.pop();
    if (x !== y) {
      maxHeap.push(y - x);
    }
  }

  return maxHeap.size > 0 ? maxHeap.pop() : 0;
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
