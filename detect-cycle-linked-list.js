class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function detectCycle(head) {
  if (head === null) return false;
  let slow = head;
  let fast = head.next;

  while (slow !== null || fast !== null) {
    if (fast === null || fast.next === null) return false;
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}

const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(3);
const node4 = new LinkedListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

console.log(detectCycle(node1));
