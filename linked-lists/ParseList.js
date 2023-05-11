class Node {
  constructor(value, next = null) {
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

function parse(string) {
  if (string === "null") return null;

  string = string.split(" -> ");
  let head = new Node(+string[0]);
  let curr = head;

  for (let i = 1; i < string.length - 1; i++) {
    curr.next = new Node(+string[i]);
    curr = curr.next;
  }
  return head;
}

console.log(arrayify(parse("0 -> 1 -> 4 -> 9 -> 16 -> null")));
