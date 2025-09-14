class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function removeNthFromEnd(head, n) {
  const dummy = new LinkedListNode(0);
  dummy.next = head;
  let front = dummy,
    back = dummy;
  for (let i = 0; i <= n; i++) {
    front = front.next;
  }
  while (front != null) {
    front = front.next;
    back = back.next;
  }
  back.next = back.next.next;
  return dummy.next;
}

const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(3);
const node4 = new LinkedListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

removeNthFromEnd(node1, 2);

console.log(node1);
