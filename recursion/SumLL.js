/*
Q. Given a linked list, sum all elements in the list.

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 // returns 10
• Given a linked list: 1 // returns 1
*/

class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function sum(head) {
  if (!head) return 0;
  return head.value + sum((head = head.next));
}

// Test Cases
var LL1 = new Node(1, new Node(4, new Node(5)));
console.log(sum(null)); // 0
console.log(sum(LL1)); // 10
console.log(sum(new Node(1))); // 1
