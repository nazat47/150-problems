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
