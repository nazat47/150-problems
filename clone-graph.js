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
