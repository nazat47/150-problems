// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node
//  with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes 
// the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as 
// a reference to the cloned graph.

class Node {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

let visited = new Map();

function cloneGraph(g) {
  if (!g) return null;

  if (visited.has(g)) return visited.get(g);

  let clonedGraph = new Node(g.val);
  visited.set(g, clonedGraph);
  for (const neighbor of g.neighbors) {
    clonedGraph.neighbors.push(cloneGraph(neighbor));
  }
  return clonedGraph;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors.push(node2);
node1.neighbors.push(node4);
node2.neighbors.push(node1);
node2.neighbors.push(node3);
node3.neighbors.push(node2);
node3.neighbors.push(node4);
node4.neighbors.push(node1);
node4.neighbors.push(node3);

console.log(cloneGraph(node1));
