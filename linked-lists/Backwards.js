// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
//

class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function getCount(head) {
  let temp = head;
  let count = 0;
  while (temp != null) {
    count++;
    temp = temp.next;
  }
  return count;
}

function solution(head, n) {
  if (!head) return null;
  let count = getCount(head);
  let place = count - n + 2;
  let index = 1;
  let temp = new Node(0, head);
  let curr = temp;

  while (curr && curr.next) {
    if (index + 1 === place) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
    index++;
  }

  return temp.next;
}
