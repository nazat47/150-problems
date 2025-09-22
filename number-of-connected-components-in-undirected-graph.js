// There is an undirected graph with n nodes. There is also an edges array, where edges[i] = [a, b] means that there 
// is an edge between node a and node b in the graph.

// The nodes are numbered from 0 to n - 1.

// Return the total number of connected components in that graph.

// Example 1:

// Input:
// n=3
// edges=[[0,1], [0,2]]

// Output:
// 1

function numberOfConnectedComponents(n, edges) {
  let counter = 0;
  let visited = new Array(edges.length).fill(false);

  let adjList = [];

  for (let i = 0; i < n; i++) {
    adjList[i] = [];
  }
  for (let edge of edges) {
    adjList[edge[0]].push(edge[1]);
    adjList[edge[1]].push(edge[0]);
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      counter++;
      dfs(adjList, visited, i);
    }
  }
  return counter;
}

function dfs(adjList, visited, node) {
  visited[node] = true;
  for (let i = 0; i < adjList[node].length; i++) {
    if (!visited[adjList[node][i]]) {
      dfs(adjList, visited, adjList[node][i]);
    }
  }
}

const edges = [
  [0, 2],
  [0, 1],
  [2, 7],
  [3, 4],
  [5, 6],
];

console.log(numberOfConnectedComponents(8, edges));
