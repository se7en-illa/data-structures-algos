/*
'''
❓ PROMPT
Given a linked list of positive integers, count the elements with odd values from the list. Note that 0 is an even number.

Example(s)
head = 1 -> 1 -> 1 -> 1
countOdd(head) == 4

head = 1 -> 2 -> 3 -> 4
countOdd(head) == 2
*/

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function countOdd(head) {
  if (!head) return 0;
  let odds = 0;

  while (head) {
    if (head.val % 2 === 1) odds++;
    head = head.next;
  }

  return odds;
}

console.log(countOdd(null) == 0);

// 0
let head = new Node(0);
console.log(countOdd(head) == 0);

// 5
head = new Node(5);
console.log(countOdd(head) == 1);

// 6
head = new Node(6);
console.log(countOdd(head) == 0);

// 1 -> 1 -> 1 -> 1
head = new Node(1, new Node(1, new Node(1, new Node(1))));
console.log(countOdd(head) == 4);

// 1 -> 2 -> 3 -> 4
head = new Node(1, new Node(2, new Node(3, new Node(4))));
console.log(countOdd(head) == 2);

// 2 -> 2 -> 2 -> 2
head = new Node(2, new Node(2, new Node(2, new Node(2))));
console.log(countOdd(head) == 0);

// 1 -> 2 -> 3 -> 4 -> 5
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
console.log(countOdd(head) == 3);

// 6 -> 2 -> 100 -> 4 -> 8
head = new Node(6, new Node(2, new Node(100, new Node(4, new Node(8)))));
console.log(countOdd(head) == 0);
