function minCostClimbingStairs(costs) {
  if (costs.length === 1) return costs[0];
  if (costs.length === 2) return Math.min(costs[0], costs[1]);

  let second = costs[1];
  let first = costs[0];

  for (let i = 2; i < costs.length; i++) {
    let currentCost = Math.min(first + costs[i], second + costs[i]);
    first = second;
    second = currentCost;
  }
  return Math.min(first, second);
}

console.log(minCostClimbingStairs([10, 15, 20]));
