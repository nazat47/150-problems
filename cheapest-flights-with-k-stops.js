function cheapestFlights(n, flights, src, dst, k) {
  let costs = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  costs[src] = 0;
  for (let i = 0; i < k; i++) {
    for (let flight of flights) {
      let temp = [...costs];
      let [u, v, cost] = flight;
      if (costs[u] === Number.MAX_SAFE_INTEGER) continue;
      if (temp[v] > costs[u] + cost) {
        temp[v] = costs[u] + cost;
      }
      costs = temp;
    }
  }
  return costs[dst] === Number.MAX_SAFE_INTEGER ? -1 : costs[dst];
}

console.log(
  cheapestFlights(
    5,
    [
      [1, 2, 10],
      [2, 3, 15],
      [3, 4, 11],
    ],
    1,
    4,
    2
  )
);
