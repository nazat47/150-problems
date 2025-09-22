// Given the root of a binary tree, invert the tree, and return its root.

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function invertTree(root) {
  if (!root) return null;

  let right = invertTree(root.right);
  let left = invertTree(root.left);

  root.left = right;
  root.right = left;
  return root;
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

console.log(node1);

console.log(invertTree(node1));
