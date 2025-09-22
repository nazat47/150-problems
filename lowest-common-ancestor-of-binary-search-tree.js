// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q 
// as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function lowestCommonAncestor(root, p, q) {
  let parentVal = root.val;

  if (p.val > parentVal && q.val > parentVal) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (p.val < parentVal && q.val < parentVal) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
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

console.log(lowestCommonAncestor(node2, node2, node1));
