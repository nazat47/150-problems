// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an
//  edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass 
//  through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let maxSum = -Infinity;

function maxGain(root) {
  if (!root) return 0;

  const leftGain = Math.max(maxGain(root.left), 0);
  const rightGain = Math.max(maxGain(root.right), 0);

  let priceNewPath = root.val + leftGain + rightGain;
  maxSum = Math.max(maxSum, priceNewPath);
  return root.val + Math.max(leftGain, rightGain);
}

function maxPathSum(root) {
  maxGain(root);
  return maxSum;
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(6);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

console.log(maxPathSum(node1));
