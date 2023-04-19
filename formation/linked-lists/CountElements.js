/*

Q. Given an unsorted linked list, count the number of elements (iteratively or recursively).

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 // returns 3
• Given a linked list: 0 // returns 1

*/

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

function countList(head) {
  if (!head) return null;

  let curr = head;
  let count = 0;

  while (curr) {
    curr = curr.next;
    count++;
  }

  return count;
}

// 🧪 VERIFY
// Run tests. Methodically debug & analyze issues.

console.log(countList(null) === null);

// 1
let head = new Node(1);
console.log(countList(head) === 1);

// 1 -> 2
head = new Node(1, new Node(2));
console.log(countList(head) === 2);

// 1 -> 2 -> 3
head = new Node(1, new Node(2, new Node(3)));
console.log(countList(head) === 3);

// 1 -> 2 -> 3 -> 4
head = new Node(1, new Node(2, new Node(3, new Node(4))));
console.log(countList(head) === 4);

// 1 -> 2 -> 3 -> 4 -> 5
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
console.log(countList(head) === 5);
