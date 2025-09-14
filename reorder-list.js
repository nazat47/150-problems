class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function reorderList(list) {
  if (list === null) return;

  let slow = list;
  let fast = list;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow;
  let temp = null;
  while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  let first = list;
  let second = prev;

  while (second.next !== null) {
    temp = first.next;
    first.next = second;
    first = temp;

    temp = second.next;
    second.next = first;
    second = temp;
  }
}

const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(3);
const node4 = new LinkedListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

reorderList(node1);

console.log(node1);
