// ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
// Q. Given a binary tree, find the element with the largest value.

// Example:
// • Given a binary tree:
//                  1
//                 / \
//                7   3
//               / \
//              4   5
// returns 7
// VERIFY

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function generateTree(arr) {
  if (!arr) return null;

  const createNode = (index) => {
    if (index >= arr.length || arr[index] === null) {
      return null;
    }
    const node = new TreeNode(arr[index]);
    node.left = createNode(2 * index + 1);
    node.right = createNode(2 * index + 2);
    return node;
  };

  return createNode(0);
}

function maxRecursive(root) {
  if (!root) return null;

  let current = root.value;
  let left = maxRecursive(root.left);
  let right = maxRecursive(root.right);

  return Math.max(current, left, right);
}

let test1 = generateTree([1, 2, 3, null, 4, null, null]);
let test2 = generateTree([12, 3, 4, 1, null, 6, null]);
let test3 = generateTree([12, 3, 4, 1, null, 6, null, 9, 7, null, null]);
let test4 = generateTree([1, 7, 3, 4, 5]);

console.log(maxRecursive(test1));
console.log(maxRecursive(test2));
console.log(maxRecursive(test3));
console.log(maxRecursive(test4));
console.log(maxRecursive(null));
