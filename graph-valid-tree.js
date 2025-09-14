function isValidTree(n, edges) {
  if (n - edges.length !== 1) return false;
  let map = new Map();
  let visited = new Set();
  for (let i = 0; i < n; i++) {
    map.set(i, []);
  }
  for (const edge of edges) {
    map.get(edge[0]).push(edge[1]);
    map.get(edge[1]).push(edge[0]);
  }
  visited.add(0);
  const stack = [0];
  while (stack.length) {
    const node = stack.pop();
    for (const child of map.get(node)) {
      if (visited.has(child)) continue;
      visited.add(child);
      stack.push(child);
    }
  }

  if (visited.size !== n) return false;

  return true;
}

const edges = [
  [0, 2],
  [0, 1],
  [2, 3],
];

console.log(isValidTree(4, edges));
