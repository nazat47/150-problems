// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times
//  as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is 
// the time it takes for a signal to travel from source to target.

// We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to
//  receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

// Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// Output: 2

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

function networkDelayTime(times, n, k) {
  let graph = new Map();
  let pq = new MinHeap();
  let distances = new Array(n + 1).fill(Number.MAX_VALUE);
  for (let edge of times) {
    if (!graph.has(edge[0])) {
      graph.set(edge[0], []);
    }
    graph.get(edge[0]).push([edge[1], edge[2]]);
  }
  pq.push([k, 0]);
  distances[k] = 0;
  while (pq.size() > 0) {
    let [currNode, currDist] = pq.pop();
    if (currDist > distances[currNode]) {
      continue;
    }

    if (graph.has(currNode)) {
      for (let neighbour of graph.get(currNode)) {
        let [nextNode, neighbourDist] = neighbour;
        let nextDist = currDist + neighbourDist;
        if (nextDist < distances[nextNode]) {
          distances[nextNode] = nextDist;
          pq.push([nextNode, nextDist]);
        }
      }
    }
  }
  console.log(distances);
  let ans = Math.max(...distances.slice(1));
  return ans === Number.MAX_VALUE ? -1 : ans;
}

console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
);
