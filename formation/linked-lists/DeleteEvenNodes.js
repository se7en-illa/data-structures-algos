/*
Delete Even Nodes In Linked List

We've been given a linked list of integer values from 0 - 2^32, and we want to delete all of the nodes that are *even* and return the list's head.

We should return the modified input linked list as our result.
 

EXAMPLE(S)
[3,1,3] => [3, 1, 3]
[5, 6, 9] => [5, 9]
[2, 2, 2] => []
[2, 7, 4, 3, 5] => [7, 3, 5]
*/

/*

EXPLORE
// [] => []
// [2,4,6] => []

BRAINSTORM
// [1,3,5,7,8]
//  even -> modulo === 0
// [1,2,2,5]

PLAN

// IMPLEMENT
*/
class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function deleteEvenNodes(head) {
  if (head === []) {
    return [];
  }

  let dummy = new ListNode(-1, head);
  let current = dummy;

  while (current.next) {
    if (current.next.value % 2 === 0) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
}

function printLinkedList(head) {
  if (!head) return [];
  let array = [head.value];
  while (head.next) {
    array.push(head.next.value);
    head = head.next;
  }
  return array;
}

// VERIFY
// TEST CASES

// console.log(deleteEvenNodes[3, 1, 3]); // [3, 1, 3]
// console.log(deleteEvenNodes[5, 6, 9]); // [5, 6, 9]
// console.log(deleteEvenNodes[2, 2, 2]); // []
// console.log(deleteEvenNodes[2, 7, 4, 3, 5]); // [7, 3, 5]

let ll = deleteEvenNodes(new ListNode(3, new ListNode(1, new ListNode(3))));
console.log(printLinkedList(ll));

ll = deleteEvenNodes(new ListNode(5, new ListNode(6, new ListNode(9))));
console.log(printLinkedList(ll));

ll = deleteEvenNodes(
  new ListNode(7, new ListNode(4, new ListNode(3, new ListNode(5))))
);
console.log(printLinkedList(ll));

ll = deleteEvenNodes(
  new ListNode(7, new ListNode(2, new ListNode(2, new ListNode(5))))
);
console.log(printLinkedList(ll));

ll = deleteEvenNodes(
  new ListNode(2, new ListNode(2, new ListNode(2, new ListNode(2))))
);
console.log(printLinkedList(ll));

ll = deleteEvenNodes(new ListNode(2));
console.log(printLinkedList(ll));

ll = deleteEvenNodes([]);
console.log(printLinkedList(ll));

ll = deleteEvenNodes(new ListNode(1));
console.log(printLinkedList(ll));

// [3, 1, 3]
// console.log(deleteEvenNodes[5, 6, 9]); // [5, 6, 9]
// console.log(deleteEvenNodes[2, 2, 2]); // []
// console.log(deleteEvenNodes[2, 7, 4, 3, 5]); // [7, 3, 5]
