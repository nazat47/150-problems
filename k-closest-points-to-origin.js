class FixedMaxHeap {
  constructor(capacity) {
    if (capacity <= 0) throw new Error("Capacity must be > 0");
    this.capacity = capacity;
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0]; // largest element (by distance)
  }

  push(value) {
    if (this.size < this.capacity) {
      this.heap.push(value);
      this._heapifyUp();
    } else if (value.dist < this.peek().dist) {
      // Replace farthest with new closer point
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
      if (element.dist <= parent.dist) break;
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
        if (this.heap[leftChildIndex].dist > element.dist) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        if (
          (swapIndex === null &&
            this.heap[rightChildIndex].dist > element.dist) ||
          (swapIndex !== null &&
            this.heap[rightChildIndex].dist > this.heap[swapIndex].dist)
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

function findDistance(x, y) {
  return Math.sqrt(x * x + y * y);
}

function kthClosestToOrigin(points, k) {
  let maxHeap = new FixedMaxHeap(k);

  for (const [x, y] of points) {
    let dist = findDistance(x, y);
    maxHeap.push({ point: [x, y], dist });
  }

  let res = [];
  while (maxHeap.size > 0) {
    res.push(maxHeap.pop().point);
  }
  return res;
}

// Example
let points = [
  [1, 3],
  [-2, 2],
  [5, 8],
  [0, 1],
];
console.log(kthClosestToOrigin(points, 2));
