class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function filter(head, test) {
  if (!head) return null;

  let temp = new Node(0, head);
  let curr = temp;

  while (curr && curr.next) {
    if (!test(curr.next.value)) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return temp.next;
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

let ll = new Node(10, new Node(2, new Node(7, new Node(5))));
let ll2 = new Node(13, new Node(10, new Node(9, new Node(8))));
let ll3 = new Node(2, new Node(2, new Node(2, new Node(2))));
let ll4 = new Node(10, new Node(20, new Node(100, new Node(-6))));

console.log(arrayify(filter(ll, (val) => val > 5)));
console.log(arrayify(filter(ll2, (val) => val > 5)));
console.log(arrayify(filter(ll3, (val) => val > 5)));
console.log(arrayify(filter(ll4, (val) => val > 5)));
