class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}

let visited = new Map();
function copyRandomList(head) {
  if (head === null) {
    return null;
  }

  if (visited.has(head)) {
    return visited.get(head);
  }

  let node = new LinkedListNode(head.val);

  visited.set(head, node);

  node.next = copyRandomList(head.next);
  node.random = copyRandomList(head.random);

  return node;
}

const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(3);
const node4 = new LinkedListNode(4);

node1.next = node2;
node1.random = node3;
node2.next = node3;
node2.random = node1;
node3.next = node4;
node3.random = null;
node4.next = node2;

copyRandomList(node1);

console.log(node1);
