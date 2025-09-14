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
