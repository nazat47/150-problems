class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let ans = [];

function order(root, level) {
  if (!ans[level]) ans[level] = [];

  ans[level].push(root.val);

  if (root.left) order(root.left, level + 1);
  if (root.right) order(root.right, level + 1);
}

function levelOrderTraversal(root) {
  if (!root) return ans;
  order(root, 0);
  return ans;
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

console.log(levelOrderTraversal(node2));
