class MinHeap {
  constructor() {
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0] ?? null; // smallest element
  }

  push(value) {
    this.heap.push(value);
    this._heapifyUp(this.size - 1);
  }

  pop() {
    if (this.size === 0) return null;
    if (this.size === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown(0);

    return min;
  }

  _heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[parentIndex]
    ) {
      this._swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  _heapifyDown(index) {
    let smallest = index;
    const left = index * 2 + 1;
    const right = index * 2 + 2;

    if (left < this.size && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.size && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      this._swap(index, smallest);
      this._heapifyDown(smallest);
    }
  }

  _swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0] ?? null; // largest element
  }

  push(value) {
    this.heap.push(value);
    this._heapifyUp(this.size - 1);
  }

  pop() {
    if (this.size === 0) return null;
    if (this.size === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown(0);

    return max;
  }

  _heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] > this.heap[parentIndex] // flip < to >
    ) {
      this._swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  _heapifyDown(index) {
    let largest = index;
    const left = index * 2 + 1;
    const right = index * 2 + 2;

    if (left < this.size && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.size && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      this._swap(index, largest);
      this._heapifyDown(largest);
    }
  }

  _swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

let minHeap = new MinHeap();
let maxHeap = new MaxHeap();

function addNum(num) {
  maxHeap.push(num);
  minHeap.push(maxHeap.pop());
  if (maxHeap.size < minHeap.size) {
    maxHeap.push(minHeap.pop());
  }
}

function findMedian() {
  return maxHeap.size > minHeap.size
    ? maxHeap.peek()
    : (maxHeap.peek() + minHeap.peek()) / 2;
}
