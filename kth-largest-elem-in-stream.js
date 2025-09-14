class FixedMinHeap {
  constructor(capacity) {
    if (capacity <= 0) throw new Error("Capacity must be > 0");
    this.capacity = capacity;
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0]; // smallest value
  }

  push(value) {
    if (this.size < this.capacity) {
      this.heap.push(value);
      this._heapifyUp();
    } else if (value > this.peek()) {
      // If new value is bigger than smallest, replace root
      this.heap[0] = value;
      this._heapifyDown();
    }
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
      if (element >= parent) break;
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
        if (this.heap[leftChildIndex] < element) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        if (
          (swapIndex === null && this.heap[rightChildIndex] < element) ||
          (swapIndex !== null &&
            this.heap[rightChildIndex] < this.heap[swapIndex])
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

class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.minHeap = new FixedMinHeap(k);
    for (const num of nums) {
      this.add(num);
    }
  }

  add(num) {
    if (this.minHeap.size < this.k) {
      this.minHeap.push(num);
    } else if (num > this.minHeap.peek()) {
      this.minHeap.pop();
      this.minHeap.push(num);
    }
    return this.minHeap.peek();
  }
}

const kthLargest = new KthLargest(2, [3, 2, 1, 5, 6, 4]);
console.log(kthLargest.minHeap.peek());
