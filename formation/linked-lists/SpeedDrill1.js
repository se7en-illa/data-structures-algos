// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// Create an algorithm to merge two sorted linked lists iteratively.

function solution(head1, head2) {
  let sentinel = new ListNode();
  let curr = sentinel;

  while (head1 && head2) {
    if (head1.val < head2.val) {
      curr.next = head1;
      head1 = head1.next;
    } else {
      curr.next = head2;
      head2 = head2.next;
    }
    curr = curr.next;
  }

  if (head1) curr.next = head1;
  if (head2) curr.next = head2;

  return sentinel.next;
}

// reverse a linked list iteratively

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let future = curr.next;
    curr.next = prev;
    prev = curr;
    curr = future;
  }

  return prev;
}

// Create an algorithm that recursively reverses a linked list.

// The base case is if the head node is None or the subsequent node is None.
// If either of these conditions are true, return the head node.
// The recursive case is to recursively call itself on the subsequent node and assign the result to a reversed_head variable.
// Point the subsequent node's next to the current head
// Set the current head's next attribute to null
// Return the reversed_head

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(head) {
  if (!head || !head.next) return head;

  let reversed_head = solution(head.next);
  head.next.next = head;
  head.next = null;

  return reversed_head;
}
