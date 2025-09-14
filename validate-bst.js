class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let prev = null;

function isValidBST(root) {
  prev = null;
  return inOrder(root);
}

function inOrder(root) {
  if (!root) return true;
  if (!inOrder(root.left)) return false;

  if (prev && prev >= root.val) return false;

  prev = root.val;

  return inOrder(root.right);
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);

node2.left = node1;
node2.right = node4;
node4.left = node3;
node4.right = node5;

console.log(isValidBST(node1));
