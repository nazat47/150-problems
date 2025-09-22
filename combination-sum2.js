// Given a collection of candidate numbers (candidates) and a target number (target), find all unique 
// combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

function combinationSum2(candidates, target) {
  let res = [];
  candidates.sort();
  backtrack(candidates, target, res, [], 0);
  return res;
}

function backtrack(candidates, target, res, curr, start) {
  if (target === 0) {
    res.push([...curr]);
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    if (i > start && candidates[i] === candidates[i - 1]) continue;
    if (target - candidates[i] < 0) break;
    curr.push(candidates[i]);
    backtrack(candidates, target - candidates[i], res, curr, i + 1);
    curr.pop();
  }
}

console.log(combinationSum2([1, 2, 2, 4, 3], 5));
