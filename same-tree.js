class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isSameTree(p, q) {
  if (p === null && q === null) return true;

  if (p === null || q === null) return false;

  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
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

const node6 = new TreeNode(1);
const node7 = new TreeNode(2);
const node8 = new TreeNode(3);
const node9 = new TreeNode(4);
const node10 = new TreeNode(5);

node6.left = node7;
node6.right = node8;
node7.left = node9;
node7.right = node10;

console.log(isSameTree(node1, node6));
