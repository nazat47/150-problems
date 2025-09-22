// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0


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
