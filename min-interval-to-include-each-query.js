// You are given a 2D integer array intervals, where intervals[i] = [lefti, righti] describes the ith interval starting 
// at lefti and ending at righti (inclusive). The size of an interval is defined as the number of integers it contains, 
// or more formally righti - lefti + 1.

// You are also given an integer array queries. The answer to the jth query is the size of the smallest interval i
//  such that lefti <= queries[j] <= righti. If no such interval exists, the answer is -1.

// Return an array containing the answers to the queries.

 

// Example 1:

// Input: intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]
// Output: [3,3,1,4]
// Explanation: The queries are processed as follows:
// - Query = 2: The interval [2,4] is the smallest interval containing 2. The answer is 4 - 2 + 1 = 3.
// - Query = 3: The interval [2,4] is the smallest interval containing 3. The answer is 4 - 2 + 1 = 3.
// - Query = 4: The interval [4,4] is the smallest interval containing 4. The answer is 4 - 4 + 1 = 1.
// - Query = 5: The interval [3,6] is the smallest interval containing 5. The answer is 6 - 3 + 1 = 4.


class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Get the difference of a pair [a, b]
  getDiff(pair) {
    return pair[1] - pair[0];
  }

  // Swap two elements
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Get parent, left, right indices
  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  left(i) {
    return 2 * i + 1;
  }

  right(i) {
    return 2 * i + 2;
  }

  // Insert a new pair
  push(pair) {
    this.heap.push(pair);
    this.bubbleUp(this.heap.length - 1);
  }

  // Move element up until heap property is restored
  bubbleUp(i) {
    while (
      i > 0 &&
      this.getDiff(this.heap[i]) < this.getDiff(this.heap[this.parent(i)])
    ) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  // Remove and return smallest pair
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return root;
  }

  // Move element down until heap property is restored
  bubbleDown(i) {
    let smallest = i;
    const left = this.left(i);
    const right = this.right(i);

    if (
      left < this.heap.length &&
      this.getDiff(this.heap[left]) < this.getDiff(this.heap[smallest])
    ) {
      smallest = left;
    }

    if (
      right < this.heap.length &&
      this.getDiff(this.heap[right]) < this.getDiff(this.heap[smallest])
    ) {
      smallest = right;
    }

    if (smallest !== i) {
      this.swap(i, smallest);
      this.bubbleDown(smallest);
    }
  }

  peek() {
    return this.heap.length ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }
}

function minInterval(intervals, queries) {
  let res = [];
  let n = queries.length;
  let queryIndices = Array.from({ length: n }, (_, i) => i);

  queryIndices.sort((a, b) => queries[a] - queries[b]);
  intervals.sort((a, b) => a[0] - b[0]);

  let minheap = new MinHeap();
  let intervalIndex = 0;

  for (let i = 0; i < n; i++) {
    const query = queries[queryIndices[i]];
    while (
      intervalIndex < intervals.length &&
      query >= intervals[intervalIndex][0]
    ) {
      let right = intervals[intervalIndex][1];
      let left = intervals[intervalIndex][0];
      if (right >= query) {
        minheap.push([left, right]);
      }
      intervalIndex++;
    }

    while (minheap.size() && minheap.peek()[1] < query) {
      minheap.pop();
    }

    if (minheap.size() === 0) {
      res[queryIndices[i]] = -1;
    } else {
      let smallest = minheap.peek();
      res[queryIndices[i]] = smallest[1] - smallest[0] + 1;
    }
  }
  return res;
}

console.log(
  minInterval(
    [
      [1, 4],
      [2, 4],
      [3, 6],
      [4, 4],
    ],
    [2, 3, 4, 5]
  )
);
