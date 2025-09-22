// You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the 
// arrival airports of one flight. Reconstruct the itinerary in order and return it.

// All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If
//  there are multiple valid itineraries, you should return the itinerary that has the smallest 
//  lexical order when read as a single string.

// For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

// Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
// Output: ["JFK","MUC","LHR","SFO","SJC"]

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
