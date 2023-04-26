/*
Q. Given a linked list and a target integer, remove all nodes with the value target.

Examples:
• Given a linked list: 4 ➞ 2 ➞ 3 ➞ 2 ➞ 2, target: 2 // returns 4 ➞ 3
• Given a linked list: 4, target: 4  // returns an empty list
• Given a linked list: 4 ➞ 4 ➞ 4, target: 2  // returns 4 ➞ 4 ➞ 4


Brainstorm:
Positive values (or negative values as well?)
Head is null: return null
Target doesn't exist: 

Planning:
- head == current; 
- iterrate through linked list
- we'll check for current node value
- if node value == target value 
  - point our current.value to current.next
*/

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function arrayify(head) {
  let ptr = head;
  var array = [];
  while (ptr != null) {
    array.push(ptr.value);
    ptr = ptr.next;
  }
  return array;
}

// 4 - 2 - 1 - 1 - 3 - 2 - 2 ---> 4 - 2 - 3 - 2 - 2
//             c
//     p
//Function
function remove(head, target) {
  if (head === null) return null;

  let temp = new ListNode(0, head);
  let curr = temp;

  while (curr !== null && curr.next) {
    if (curr.next.value === target) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return temp.next;
}

// Test Cases
let LL1 = new ListNode(
  4,
  new ListNode(
    2,
    new ListNode(
      1,
      new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2))))
    )
  )
);

let LL2 = remove(null, 1);
console.log(arrayify(LL2)); // []

LL1 = remove(LL1, 1);
console.log(arrayify(LL1)); // [4, 2, 3, 2, 2]

LL1 = remove(LL1, 2);
console.log(arrayify(LL1)); // [4, 3]

LL1 = remove(LL1, 3);
console.log(arrayify(LL1)); // [4]

LL1 = remove(LL1, 4);
console.log(arrayify(LL1)); // []

// NOTE: If you're removing the head node, you need to reassign LL1 or it will still point to the old head!

// recursive functions are linear space bc the function is called repeatedly
