// # TODO: Tail recursion?

// # 1. Given a linked list and an integer, find whether the integer exists in the list. Return a boolean.

// def findInteger(head, target):
//     if head is None:
//         return False

//     if head.value == target:
//         return True
//     return findInteger(head.next, target)

// # l = LL(1, LL(2, LL(3, LL(4))))
// # print(l)

// # print(findInteger(l, 2), 'expected true')
// # print(findInteger(l, 7), 'expected false')

// # 2. counting num times element occurs in a linked list

// # not tail recursive
// def count(head, target):
//     if head is None:
//         return 0

//     if head.value == target:
//         return 1 + count(head.next, target)
//     else:
//         return count(head.next, target)

// # Languages that support Tail Call Optimization (Tail Recursion)
// # Python NOT
// # JS YES
// # Java YES

// # tail recursive
// def count2(head, target, count=0):
//     if head is None:
//         return count
//     if head.value == target:
//         return count2(head.next, target, count + 1)
//     else:
//         return count2(head.next, target, count)

// l = LL(1, LL(2, LL(2, LL(3))))
// print(l)

// print(count2(l, 1), 'expected 1')
// print(count2(l, 2), 'expected 2')
// print(count2(l, 3), 'expected 1')

class LL {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// 3. Find mean of a list of integers

function calculateMean(node, sum = 0, count = 0) {
  if (!node) {
    // if (count === 0) return null;
    if (count === 0) throw new Error("can't calculate mean of empty list");
    return sum / count;
  }

  return calculateMean(node.next, sum + node.value, count + 1);
}

let ll = new LL(1, new LL(2, new LL(2, new LL(10))));
// console.log(ll);
// console.log(calculateMean(ll));
// console.log(calculateMean(null));

// function calculateMean2(node) {
//   if (!node) {
//     return [0, 0];
//   }

//   let [nextSum, nextCount] = calculateMean2(node.next);

//   return [head.value, 1] + calculateMean2(node.next);
// }

// console.log(calculateMean2(ll));
// console.log(calculateMean2(null));

// 4. Replace all negative values with a 0

function printLL(ll) {
  while (ll) {
    console.log(ll.value);
    ll = ll.next;
  }
}

function replaceNegatives(head, curr = head) {
  if (!curr) return head;

  if (curr.value < 0) curr.value = 0;
  replaceNegatives(head, curr.next);
}

ll = new LL(-2, new LL(-1, new LL(0, new LL(10))));
replaceNegatives(ll);
printLL(ll);
