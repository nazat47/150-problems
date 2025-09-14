class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function recursiveSerialize(root, str) {
  if (!root) {
    str += "null,";
  } else {
    str += root.val + ",";
    str = recursiveSerialize(root.left, str);
    str = recursiveSerialize(root.right, str);
  }
  return str;
}

function serialize(root) {
  return recursiveSerialize(root, "");
}

function recursiveDeserialize(data) {
  if (data[0] === "null") {
    data.shift();
    return null;
  }

  let root = new TreeNode(data[0]);
  data.shift();
  root.left = recursiveDeserialize(data);
  root.right = recursiveDeserialize(data);
  return root;
}

function deserialize(str) {
  return recursiveDeserialize(str.split(","));
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

let data = serialize(node1);
console.log(deserialize(data));
