class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let prev = null;

  while (head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

function removeNthFromEnd(head, n) {
  let copyOfHead = head;
  let reversedCopyOfHead = reverseLinkedList(copyOfHead);

  let prev = null,
    current = reversedCopyOfHead;
  while (reversedCopyOfHead !== null) {
    let next = reversedCopyOfHead.next;

    if (n === 1) {
      reversedCopyOfHead.next = null;
      prev.next = next;
      return reverseLinkedList(current);
    }
    n--;

    prev = reversedCopyOfHead;
    reversedCopyOfHead = reversedCopyOfHead.next;
  }
}

//console.log(removeNthFromEnd(head, 2))

function genList(arr) {
  if (arr.length === 0) return null;

  const head = new Node(arr[0]);
  head.next = genList(arr.slice(1));

  return head;
}

//below is how you write out a linkedlist by hand
let list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

const remove = (head, n) => {
  let newHead = new Node(null, head); // we set next to head instead of initializing to the head on line 65 in the case that the head itself is the nth node that needs to be removed

  let p1 = newHead; // we need two pointers to create a gap of "n" nodes
  let p2 = newHead;

  for (let i = 0; i < n + 1; i++) {
    // the for loop will move the pointer1 position "n" nodes ahead of pointer2 | we do n + 1 to account for index vs length
    p1 = p1.next;
  }

  //

  while (p1 !== null) {
    // we this to move both pointers at the same time (while they are n nodes apart) until we get to the end of the list
    p2 = p2.next;
    p1 = p1.next;
  }

  p2.next = p2.next.next; // we've reached the node that needs to be removed, so we set it next.next to skip over the node
  return newHead.next;
};

// Time: O(L) where L is the length of the list, because we need to traverse twice
// Space: O(1), because there's a fixed number of variables and the space does not increase with the loop

/*
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
  */

const arrayify = (head) =>
  !head ? [] : [head.value].concat(arrayify(head.next));

let head2 = genList([1, 2, 3, 4, 5]);
let head3 = genList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let head4 = genList([1]);

console.log(arrayify(remove(head2, 2)));
console.log("above answer should be [1, 2, 3, 5]");

console.log(arrayify(remove(head3, 3)));
console.log("above answer should be [1, 2, 3, 4, 5, 6, 7, 9, 10]");
