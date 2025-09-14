class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function reverseNodesInkGroup(head, k) {
  let ptr = head;
  let ktail = null;
  let newHead = null;
  while (ptr) {
    let count = 0;
    ptr = head;
    while (count < k && ptr) {
      ptr = ptr.next;
      count++;
    }

    if (count === k) {
      let revHead = reverseList(head, k);
      if (ktail !== null) {
        ktail.next = revHead;
      }
      if (newHead === null) {
        newHead = revHead;
      }

      ktail = head;
      head = ptr;
    }
  }

  if (ktail !== null) {
    ktail.next = head;
  }

  return newHead ? newHead : head;
}

function reverseList(head, k) {
  let prev = null;
  let curr = head;
  while (k > 0) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
    k--;
  }
  return prev;
}

const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(3);
const node4 = new LinkedListNode(4);
const node5 = new LinkedListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(node1);

console.log(reverseNodesInkGroup(node1, 2));
