// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes 
// with a value greater than X.

// Return the number of good nodes in the binary tree.

// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.


class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function numberOfGoodNodes(root, maxVal) {
  if (!root) return 0;

  let count = 0;
  if (root.val >= maxVal) {
    count = 1;
    maxVal = root.val;
  }

  count += numberOfGoodNodes(root.left, maxVal);
  count += numberOfGoodNodes(root.right, maxVal);

  return count;
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

console.log(numberOfGoodNodes(node1, 0));
