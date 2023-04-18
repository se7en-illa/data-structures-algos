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
  let dummy = head;

  while (dummy != null) {
    array.push(dummy.value);
    dummy = dummy.next;
  }

  return array;
}

// O(N) time
function insert(head, target) {
  if (!head) return new ListNode(target);

  let dummy = new ListNode(0);
  dummy.next = head;
  let node = dummy;

  while (node) {
    if (!node.next || target < node.next.value) {
      const next = node.next;
      node.next = new ListNode(target);
      node.next.next = next;
      break;
    }

    node = node.next;
  }

  return dummy.next;
}

// 🧪 VERIFY Run tests. Methodically debug & analyze issues.

var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)));
var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)));
console.log(arrayify(insert(LL1, 2))); // [1, 2, 3, 4]
console.log(arrayify(insert(LL2, -4))); // [-4, -3, -2, -1]
console.log(arrayify(insert(LL2, 0))); // [-3, -2, -1, 0]
console.log(arrayify(insert(null, 1))); // [1]
