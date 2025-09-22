// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function addTwoNumbers(l1, l2) {
  let dummy = new LinkedListNode(0);
  let ans = dummy;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry !== 0) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let sum = carry + x + y;
    ans.next = new LinkedListNode(sum % 10);
    carry = sum / 10;
    ans = ans.next;
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }
  return dummy.next;
}

const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(3);
const node4 = new LinkedListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

const nodeb1 = new LinkedListNode(3);
const nodeb2 = new LinkedListNode(5);
const nodeb3 = new LinkedListNode(9);

nodeb1.next = nodeb2;
nodeb2.next = nodeb3;
nodeb3.next = null;

console.log(addTwoNumbers(node1, nodeb1));
