class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

function generateList(array) {
  if (array.length === 0) return null;

  let head = new ListNode(array[0]);

  let current = head;
  for (let i = 1; i < array.length; i++) {
    current.next = new ListNode(array[i]);
    current = current.next;
  }
  return head;
}

let array = [1, 5, 7, 10];
let linkedList = generateList(array);
//console.log(linkedList);

/* Let's use the following LinkedList:
  
    1 --> 5 --> 7 --> 10 --> null
    
  */
//----------------------------------------------------
/*
  1. Print Forward:
  Write a function that prints all values of the LinkedList in a forward-order
  */
// function printForward(current) {
//  while(current!==null) { //Time: O(N)
//     console.log(current.value);
//     current = current.next;
//   }
// }
// console.log("Forward:");
// printForward(linkedList);
/*
  Time Complexity: O(N), N = number of nodes in LinkedList
  Space Complexity: O(1), nothing new created based on input size
  */

/*
  2. Print Backward:
  Write a function that prints all values of the LinkedList in a backward-order
  */
//function printBackward(current) { //Time: O(N)
// if (current === null) return;
//   printBackward(current.next);
//   console.log(current.value);
// }
// console.log("Backward:");
// printBackward(linkedList);
/*
  Time Complexity: O(N), N = number of nodes in LinkedList
  Space Complexity: O(N), We create a call stack based on input size
  */

/*
  3. Reverse:
  Write a function that reverses the Linked List in-place.
  Output: 10 --> 7 --> 5 --> 1 --> null
  */

function reverse(head) {
  let current = head;
  let previous = null;
  // current
  let next = current.next;

  // null<-- 1 --> 5 --> 7 --> 10 --> null

  while (current) {
    let next = current.next;
    current.next = previous; // sets the next value of the current node to previous node
    previous = current; // points the variable previous to the current node
    current = next; // moves to the next node in the linked list
  }
  return previous;
}

// console.log(reverse(linkedList));

/*
  Time Complexity: O(N)
  Space Complexity: O(1)
  */

/*
  4. Merge Two Sorted Lists:
     Merge two sorted lists and return head of the merged list
     Given the following Lists:
  
     List 1: 1 --> 2 --> 4 --> null
     List 2: 0 --> 3 --> 4 --> null
  
     Answer: 0 --> 1 --> 2 --> 3 --> 4 --> 4 --> null
  */

function arrayify(head) {
  let array = [];
  let dummy = head;

  while (dummy != null) {
    array.push(dummy.value);
    dummy = dummy.next;
  }

  return array;
}

function mergeTwoLists(head1, head2) {
  let temp = new ListNode(0, null);
  let current = temp;

  while (head1 && head2) {
    if (head1.value < head2.value) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next;
  }

  if (head1) {
    current.next = head1;
  } else {
    current.next = head2;
  }

  return temp.next;
}

let l1 = generateList([0, 1, 4, 20]);
let l2 = generateList([1, 3, 4, 10]);
console.log(arrayify(mergeTwoLists(l1, l2)));
/*
  Time Complexity: 
  Space Complexity:
  */
