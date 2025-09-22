// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary 
// tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]


class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let inorderIndex;
let preorderIndex;

function buildTree(inorder, preorder) {
  preorderIndex = 0;
  inorderIndex = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderIndex.set(inorder[i], i);
  }

  return build(preorder, 0, preorder.length - 1);
}

function build(preorder, left, right) {
  if (left > right) return null;

  let rootVal = preorder[preorderIndex++];
  let root = new TreeNode(rootVal);
  root.left = build(preorder, left, inorderIndex.get(rootVal) - 1);
  root.right = build(preorder, inorderIndex.get(rootVal) + 1, right);
  return root;
}

console.log(buildTree([1, 2, 3, 4], [1, 2, 4, 3]));
