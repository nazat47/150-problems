// You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be
// idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.

// Return the minimum number of CPU intervals required to complete all tasks.

 

// Example 1:

// Input: tasks = ["A","A","A","B","B","B"], n = 2

// Output: 8

// Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.

// After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3rd
//  interval, neither A nor B can be done, so you idle. By the 4th interval, you can do A again as 2 intervals have passed.


class MaxHeap {
  constructor() {
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0] ?? null; // max element
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
      this.heap[currentIndex] > this.heap[parentIndex]
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

function taskSchedular(tasks, n) {
  let map = new Map();
  for (const task of tasks) {
    if (!map.has(task)) {
      map.set(task, 1);
    } else {
      map.set(task, map.get(task) + 1);
    }
  }

  let maxHeap = new MaxHeap();

  let time = 0;

  for (const [task, count] of map) {
    maxHeap.push(count);
  }

  while (maxHeap.size > 0) {
    let temp = [];
    for (let i = 0; i < n + 1; i++) {
      if (maxHeap.size > 0) {
        temp.push(maxHeap.pop());
      }
    }
    for (let freq of temp) {
      if (--freq > 0) {
        maxHeap.push(freq);
      }
    }
    time += maxHeap.size === 0 ? temp.length : n + 1;
  }
  return time;
}

console.log(taskSchedular(["A", "A", "A", "B", "B", "C"], 2));
