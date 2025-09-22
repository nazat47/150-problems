// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost,
//  you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

 

// Example 1:

// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.


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
