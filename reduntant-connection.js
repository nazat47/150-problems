// In this problem, a tree is an undirected graph that is connected and has no cycles.

// You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. 
// The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. 
// The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an 
// edge between nodes ai and bi in the graph.

// Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers,
//  return the answer that occurs last in the input.


//  Input: edges = [[1,2],[1,3],[2,3]]
// Output: [2,3]

function reduntantConnection(edges) {
  let parent = [];
  for (let i = 1; i <= edges.length; i++) {
    parent[i] = i;
  }

  for (let edge of edges) {
    let node1 = edge[0];
    let node2 = edge[1];

    let root1 = findroot(parent, node1);
    let root2 = findroot(parent, node2);

    if (root1 === root2) {
      return edge;
    }

    parent[root2] = root1;
  }
  return [];
}

function findroot(parent, node) {
  while (node !== parent[node]) {
    parent[node] = parent[parent[node]];
    node = parent[node];
  }
  return node;
}

const edges = [
  [1, 2],
  [1, 3],
  [2, 3],
];

console.log(reduntantConnection(edges));
