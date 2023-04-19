/*

Q. Given a linked list, return the kth element from the end of the list.
   If the k exceeds the length of the list, return -1.

Examples:
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 1 // returns 10
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 7 // returns -1

*/

function kthElementFromEnd(head, k) {
  let pointer1 = head;
  let pointer2 = head;

  for (let i = 0; i < k; i++) {
    if (!pointer2) {
      return -1;
    }
    pointer2 = pointer2.next;
  }

  while (pointer2) {
    pointer1 = p1.next;
    pointer2 = pointer2.next;
  }

  return pointer1 ? pointer1.val : -1;
}
