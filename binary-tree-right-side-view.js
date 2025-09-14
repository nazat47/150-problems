class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function rightSideView(root) {
  if (!root) return [];
  let res = [];
  let queue = [root];

  while (queue.length) {
    let level = queue.length;
    for (let i = 0; i < level; i++) {
      const node = queue.shift();

      if (i === level - 1) {
        res.push(node.val);
      }

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return res;
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

console.log(rightSideView(node1));
