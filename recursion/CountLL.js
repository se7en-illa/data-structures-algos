/*
Q. Given an unsorted linked list, count the number of elements (iteratively or recursively).

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 // returns 3
• Given a linked list: 0 // returns 1

*/

class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function count(head, total = 1) {
  if (!head) return 0;
  if (!head.next) return total;

  return count((head = head.next), total + 1);
}

// Test Cases
var LL1 = new Node(1, new Node(4, new Node(5)));
console.log(count(null)); // 0
console.log(count(LL1)); // 3
console.log(count(new Node())); // 1
