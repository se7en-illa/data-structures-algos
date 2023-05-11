class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

let n = new Node(
  1,
  new Node(2, new Node(4, new Node(6), null), null),
  new Node(3, new Node(5), new Node(7))
);

//       1
//      / \
//     2   3
//    /   / \
//   4   5   7
//  /
// 6

// 1. Count the number of times a target value is in the binary tree
function count(tree, target) {
  if (tree === null) {
    return 0;
  }
  let left = count(tree.left, target);
  let right = count(tree.right, target);
  return (tree.value === target ? 1 : 0) + left + right;
}

console.log(count(n, 7));

// 2. Count the number of items in the tree that satisfy a predicate function

// Daily WTF
// https://thedailywtf.com/

// in recursion, follow the types, they will help!
function countItems(root, callback) {
  if (!root) return 0;

  let left = countItems(root.left, callback);
  let right = countItems(root.right, callback);

  return (callback(root.value) ? 1 : 0) + left + right;
}

console.log(countItems(n, (val) => val % 2 === 0));

// 3. Find the most frequent value in a binary tree
///

function mostFrequent(root) {
  let stack = [root];
  let freqValue = new Map();

  while (stack.length) {
    let curr = stack.pop();
    freqValue.set(curr.value, (freqValue.get(curr.value) || 0) + 1);
    if (curr.left) {
      stack.push(curr.left);
    }
    if (curr.right) {
      stack.push(curr.right);
    }
  }

  let winningValue = undefined;
  let winningCount = Number.NEGATIVE_INFINITY;

  for (let [value, count] of freqValue.entries()) {
    if (count > winningCount) {
      winningValue = value;
      winningCount = count;
    }
  }

  return winningValue;
}

let f = new Node(
  1,
  new Node(20, new Node(40, new Node(40), null), null),
  new Node(20, new Node(40), new Node(20))
);
console.log("most frequent", mostFrequent(f));

function mostFrequentRec(root) {
  let freqValue = new Map();

  function recurse(tree) {
    if (tree === null) {
      return;
    }
    recurse(tree.left);
    recurse(tree.right);
    freqValue.set(tree.value, (freqValue.get(tree.value) || 0) + 1);
  }
  recurse(root);

  console.log("freqValue in recursive version after recursion", freqValue);
  let winningValue = undefined;
  let winningCount = Number.NEGATIVE_INFINITY;

  for (let [value, count] of freqValue.entries()) {
    if (count > winningCount) {
      winningValue = value;
      winningCount = count;
    }
  }

  return winningValue;
}
console.log("most frequent rec", mostFrequentRec(f));

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

// FOR RECURSION FOLLOW THE TYPES
