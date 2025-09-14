class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let maxDiameter = 0;

function diameterOfBinaryTree(root) {
  maxDepth(root);
  return maxDiameter;
}

function maxDepth(root) {
  if (!root) return 0;

  let leftMax = maxDepth(root.left);
  let rightMax = maxDepth(root.right);

  maxDiameter = Math.max(maxDiameter, leftMax + rightMax);
  return Math.max(leftMax, rightMax) + 1;
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

console.log(diameterOfBinaryTree(node1));
