/*
'''
Given a singly linked list, return true or false if the list is a palindrome or not.

'racecar'
 

EXAMPLE(S)
Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false

[1, 2, 2, 3, 2, 2, 1]
 
// empty list -> true
// list with one node --> true
// list with 2 different items --> false

// if there's no head return true
// left -> head

// helper function -> convert list to array -> !head return: concat values to an array

// for loop -> arr.length / 2
    [1,2,2,1]
  if arr[i] !== arr.length - 1 - i return false;

return true
time: O(N)
space: O(N)

FUNCTION SIGNATURE
function isLLPalindrome(head) {
'''
*/

class NodeList {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const listToArray = (head) =>
  !head ? [] : [head.value].concat(listToArray(head.next));

function isLLPalindrome(head, arr = listToArray(head)) {
  if (!head) return true;

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }

  return true;
}

//FORMATION

function isPalindrome(head) {
  const stack = [];

  let curr = head;
  while (curr) {
    stack.push(curr.val);
    curr = curr.next;
  }

  while (head) {
    if (head.val !== stack.pop()) return false;
    head = head.next;
  }

  return true;
}

console.log(isLLPalindrome(null) === true);
console.log(isLLPalindrome(new NodeList(1)) === true);
console.log(isLLPalindrome(new NodeList(1, new NodeList(1))) === true);
console.log(
  isLLPalindrome(new NodeList(1, new NodeList(2, new NodeList(1)))) === true
);
console.log(
  isLLPalindrome(new NodeList(1, new NodeList(2, new NodeList(3)))) === false
);
