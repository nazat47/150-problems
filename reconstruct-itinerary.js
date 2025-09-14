function reconstructItinerary(tickets) {
  let map = new Map();
  for (const ticket of tickets) {
    if (!map.has(ticket[0])) {
      map.set(ticket[0], []);
    }
    map.get(ticket[0]).push(ticket[1]);
  }

  for (const values of map.values()) {
    values.sort();
  }

  let res = [];
  dfs("JFK", map, res);
  return res;
}

function dfs(from, map, res) {
  const dests = map.get(from);
  while (dests && dests.length) {
    const next = dests.shift();
    dfs(next, map, res);
  }
  res.push(from);
}

const tickets = [
  ["JFK", "SFO"],
  ["ATL", "SFO"],
  ["SFO", "ATL"],
  ["ATL", "JFK"],
  ["JFK", "ATL"],
];
console.log(reconstructItinerary(tickets));
