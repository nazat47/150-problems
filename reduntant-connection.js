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
