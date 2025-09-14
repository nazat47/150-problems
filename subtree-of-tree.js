class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isSame(p, q) {
  if (p === null && q === null) return true;

  if (p === null || q === null) return false;

  if (p.val !== q.val) return false;

  return isSame(p.left, q.left) && isSame(p.right, q.right);
}

function isSubtree(root, subroot) {
  if (!root) return false;

  if (isSame(root, subroot)) return true;

  return isSubtree(root.left, subroot) || isSubtree(root.right, subroot);
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

const node7 = new TreeNode(2);
const node9 = new TreeNode(4);
const node10 = new TreeNode(5);

node7.left = node9;
node7.right = node10;

console.log(isSubtree(node1, node7));
