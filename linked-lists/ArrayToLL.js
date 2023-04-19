/*
'''
❓ PROMPT
Given an array containing numbers, convert this to a singly linked list and return the head of the list.

Example(s)
arrayToLL([1,2]) == "1 -> 2"
arrayToLL([1,2,3]) == "1 -> 2 -> 3"
*/

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function arrayToLL(array) {
  //   let head = new Node(0);
  //   let curr = head;

  //   for (let i = 0; i < array.length; i++) {
  //     let node = new Node(array[i]);
  //     curr.next = node;
  //     curr = curr.next;
  //   }

  //   return curr.next;
  let sentinel = new Node(0);

  let curr = sentinel;
  for (let i = 0; i < array.length; i++) {
    curr.next = new Node(array[i]);
    curr = curr.next;
  }

  return sentinel.next;
}

console.log(toString(arrayToLL([])) == "<empty>");
console.log(toString(arrayToLL([1])) == "1");
console.log(toString(arrayToLL([1, 2])) == "1 -> 2");
console.log(toString(arrayToLL([1, 2, 3])) == "1 -> 2 -> 3");
console.log(toString(arrayToLL([5, 0, 3])) == "5 -> 0 -> 3");
console.log(toString(arrayToLL([8, 7, 8, 8])) == "8 -> 7 -> 8 -> 8");
console.log(toString(arrayToLL([8, 7, 8, 8, 7])) == "8 -> 7 -> 8 -> 8 -> 7");
