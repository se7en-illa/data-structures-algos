const arrayify = (head) =>
  !head ? [] : [head.value].concat(arrayify(head.next));

function arrayToLL(array) {
  let sentinel = new Node(0);

  let curr = sentinel;
  for (let i = 0; i < array.length; i++) {
    curr.next = new Node(array[i]);
    curr = curr.next;
  }

  return sentinel.next;
}
