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

function countElements(root) {
  return !root
    ? null
    : 1 + countElements(root.right) + countElements(root.left);
}

let test1 = generateTree([1, 2, 3, null, 4, null, null]);
let test2 = generateTree([12, 3, 4, 1, null, 6, null]);
let test3 = generateTree([12, 3, 4, 1, null, 6, null, 9, 7, null, null]);
let test4 = generateTree([1, 7, 3, 4, 5]);

console.log(countElements(test1));
console.log(countElements(test2));
console.log(countElements(test3));
console.log(countElements(test4));
console.log(countElements(null));
