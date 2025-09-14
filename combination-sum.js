function combinationSum(candidates, target) {
  let res = [];
  let combination = [];
  backtrack(res, combination, candidates, target, 0);
  return res;
}

function backtrack(res, combination, candidates, target, index) {
  if (target === 0) {
    res.push([...combination]);
  } else if (target < 0) {
    return;
  }
  for (let i = index; i < candidates.length; i++) {
    combination.push(candidates[i]);
    backtrack(res, combination, candidates, target - candidates[i], i);
    combination.pop();
  }
}

console.log(combinationSum([1, 2, 3], 4));
