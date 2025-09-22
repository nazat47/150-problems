// You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

// The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|,
//  where |val| denotes the absolute value of val.

// Return the minimum cost to make all points connected. All points are connected if there is exactly one simple
//  path between any two points.

//  Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
// Output: 20

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

  push([a, b]) {
    this.heap.push([a, b]);
    this.heapifyUp();
  }

  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  peek() {
    return this.heap[0] || null;
  }

  size() {
    return this.heap.length;
  }

  heapifyUp() {
    let i = this.heap.length - 1;
    while (i > 0 && this.heap[this.parent(i)][1] > this.heap[i][1]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  heapifyDown() {
    let i = 0;
    while (this.leftChild(i) < this.size()) {
      let smallerChild = this.leftChild(i);

      if (
        this.rightChild(i) < this.size() &&
        this.heap[this.rightChild(i)][1] < this.heap[smallerChild][1]
      ) {
        smallerChild = this.rightChild(i);
      }

      if (this.heap[i][1] <= this.heap[smallerChild][1]) break;

      this.swap(i, smallerChild);
      i = smallerChild;
    }
  }
}

function minCostConnectPoints(points) {
  let n = points.length;
  let minCosts = 0;
  let pq = new MinHeap();
  let inMst = new Array(n).fill(false);
  pq.push([0, 0]);
  let pointsConnected = 0;
  while (pointsConnected < n) {
    let [index, cost] = pq.pop();
    if (inMst[index]) {
      continue;
    }
    inMst[index] = true;
    pointsConnected++;
    minCosts += cost;
    for (let i = 0; i < n; i++) {
      if (!inMst[i]) {
        let dist =
          Math.abs(points[index][0] - points[i][0]) +
          Math.abs(points[index][1] - points[i][1]);
        pq.push([i, dist]);
      }
    }
  }
  return minCosts;
}

console.log(
  minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ])
);
