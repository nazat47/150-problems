// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]


class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const nodex1 = new LinkedListNode(1);
const nodex3 = new LinkedListNode(3);
const nodex4 = new LinkedListNode(4);

nodex1.next = nodex3;
nodex3.next = nodex4;

const nodey1 = new LinkedListNode(1);
const nodey2 = new LinkedListNode(2);
const nodey3 = new LinkedListNode(4);
const nodey4 = new LinkedListNode(5);
const nodey5 = new LinkedListNode(6);

nodey1.next = nodey2;
nodey2.next = nodey3;
nodey3.next = nodey4;
nodey4.next = nodey5;

function mergeTwoSortedLists(list1, list2) {
  let dummy = new LinkedListNode(0);
  let merge = dummy;

  while (list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      merge.next = list1;
      list1 = list1.next;
    } else {
      merge.next = list2;
      list2 = list2.next;
    }
    merge = merge.next;
  }

  if (merge.next === list1 && list1 === null) {
    merge.next = list2;
  } else {
    merge.next = list1;
  }
  return dummy.next;
}

console.log(mergeTwoSortedLists(nodex1, nodey1));
