/*
Given integers *X* and *Y*, return the head of a linked list with *X* nodes with value *Y*.

Example(s)
createLL(5, 3)
"3 -> 3 -> 3 -> 3 -> 3"

createLL(6, 6)
"6 -> 6 -> 6 -> 6 -> 6 -> 6"

createLL(2, -10)
"-10 -> -10"
*/

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function createLL(x, y) {
  let head = new Node(y);
  let curr = head;

  for (let i = 0; i < x; i++) {
    curr.next = new Node(y);
    curr = curr.next;
  }

  return head.next;
}

// function createLL(count, value) {
//   if (count === 0) return null;

//   let sentinel = new Node();
//   let curr = sentinel;

//   while (count > 0) {
//     curr.next = new Node(value);
//     curr = curr.next;
//     count--;
//   }

//   return sentinel.next;
// }

function toString(head) {
  if (!head) return "<empty>";

  let parts = [];
  while (head) {
    parts.push(head.val);
    head = head.next;
  }

  return parts.join(" -> ");
}

console.log(toString(createLL(0, 1000)) === "<empty>");
console.log(toString(createLL(1, 999)) === "999");
console.log(toString(createLL(2, 88)) === "88 -> 88");
console.log(toString(createLL(3, 4)) === "4 -> 4 -> 4");
console.log(toString(createLL(5, 3)) === "3 -> 3 -> 3 -> 3 -> 3");
console.log(toString(createLL(6, 6)) === "6 -> 6 -> 6 -> 6 -> 6 -> 6");
console.log(toString(createLL(2, -10)) === "-10 -> -10");
console.log(toString(createLL(3, 0)) === "0 -> 0 -> 0");
