class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(root, arr) {
  if (!root) return arr;
  inOrderTraversal(root.left, arr);
  arr.push(root.val);
  inOrderTraversal(root.right, arr);
  return arr;
}

function kthSmallest(root, k) {
  let arr = inOrderTraversal(root, []);
  return arr[k - 1];
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

console.log(kthSmallest(node2, 1));
