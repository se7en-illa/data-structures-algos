/*
Q. Given a linked list, sum all elements in the list.

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 // returns 10
• Given a linked list: 1 // returns 1

*/
class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function sum(node) {
  if (!node) return 0;

  let temp = new ListNode(0, node);
  let curr = temp;
  let sum = 0;

  while (curr) {
    sum += curr.value;
    curr = curr.next;
  }

  return sum;
}

function sum(node) {
  if (!node) {
    return 0;
  } else {
    return node.value + sum(node.next);
  }
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)));
console.log(sum(null)); // 0
console.log(sum(LL1)); // 10
console.log(sum(new ListNode(1))); // 1

function reduce(head, accumulator, initialVal) {}

class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function filter(head, test) {
  if (!head) return null;

  let dummy = new Node(0, head);
  let curr = dummy;
  if (!test(curr.value)) curr = curr.next;

  while (curr) {
    if (!test(curr.next.value)) {
      curr.next = curr.next.next;
    }
    curr = curr.next;
  }

  return dummy.next;
}
