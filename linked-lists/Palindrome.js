/*
'''
❓ PROMPT
Given an array, create a palindrome linked list by iterating through the array forwards and backwards. *The last element should not be repeated.*

Example(s)
createPalindromeLL([99]) == "99"
createPalindromeLL([1,4,5]) == "1 -> 4 -> 5 -> 4 -> 1"
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function createPalindromeLL(arr) {
  if (!arr.length) return null;

  let head = new Node();
  let curr = head;

  for (let i = 0; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    curr.next = newNode;
    curr = curr.next;
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    let newNode = new Node(arr[i]);
    curr.next = newNode;
    curr = curr.next;
  }

  return head.next;
}

function createPalindromeLL(arr) {
  if (!arr.length) return null;

  let sentinel = new Node();
  let curr = sentinel;

  for (let i = 0; i < arr.length; i++) {
    curr.next.value = new Node(arr[i]);
    curr = curr.next;
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    curr.next.value = new Node(arr[i]);
    curr = curr.next;
  }

  return sentinel.next;
}

function toString(head) {
  if (!head) return "<empty>";

  let parts = [];
  while (head) {
    parts.push(head.val);
    head = head.next;
  }

  return parts.join(" -> ");
}

console.log(toString(createPalindromeLL([])));
console.log(toString(createPalindromeLL([99])));
console.log(toString(createPalindromeLL([4, 2])));
console.log(toString(createPalindromeLL([1, 4, 5])));
console.log(
  toString(createPalindromeLL([4, 9, 14])) === "4 -> 9 -> 14 -> 9 -> 4"
);
console.log(
  toString(createPalindromeLL([20, 15, 10, 5])) ===
    "20 -> 15 -> 10 -> 5 -> 10 -> 15 -> 20"
);
console.log(
  toString(createPalindromeLL([5, 5, 5, 5])) ===
    "5 -> 5 -> 5 -> 5 -> 5 -> 5 -> 5"
);
console.log(
  toString(createPalindromeLL([1, 2, 3, 2, 1])) ===
    "1 -> 2 -> 3 -> 2 -> 1 -> 2 -> 3 -> 2 -> 1"
);
