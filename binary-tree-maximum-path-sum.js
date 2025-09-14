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
