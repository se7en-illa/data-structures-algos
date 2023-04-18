/* 
Q. Given a sorted linked list, insert an element in the appropriate position.

Examples:
• Given a linked list: 1 ➞ 3 ➞ 4, target: 2 // returns 1 ➞ 2 ➞ 3 ➞ 4
• Given an empty linked list, target: 1  // returns 1

🔎 EXPLORE
What are some other insightful & revealing test cases?
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 


🛠️ IMPLEMENT Write your algorithm.
 */

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function arrayify(head) {
  let array = [];

  while (head != null) {
    array.push(head.value);
    head = head.next;
  }
  return array;
}

function insert(head, target) {
  // Write your code here.
  return new ListNode();
}

// 🧪 VERIFY Run tests. Methodically debug & analyze issues.

var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)));
var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)));
console.log(arrayify(insert(LL1, 2))); // [1, 2, 3, 4]
console.log(arrayify(insert(LL2, -4))); // [-4, -3, -2, -1]
console.log(arrayify(insert(LL2, 0))); // [-3, -2, -1, 0]
console.log(arrayify(insert(null, 1))); // [1]
