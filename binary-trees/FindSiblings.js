/*
Find Siblings

We're given a tree, and we want to find all of the nodes in the tree that have siblings (other nodes under their parent).

Return an array of nodes representing each sibling in any order. No only children can be in your result array.
 

EXAMPLE(S)
      1
  2      3
_  4   _  _

should return [2, 3]

     12
  3      4
1  _   6  _

should return [3, 4]

        12
     3       4
  1   _    6   _
9  7      _ _

should return [3, 4, 9, 7]

EXPLORE:
// if root is null
// if there are no sibling pairs return an empty

BRAINSTORM:


PLAN:
*/
// variable arr to hold the sibling values
// helper function:
// starting from root,
// check through each node recursively
// check if node has left and right children
// if yes, add left and right children to return array
// move on to the next node
// call the helper function, passing the root
// return the array variable

// IMPLEMENT

function findSiblingNodes(root) {
  let returnArr = [];

  function nodeCheckHelper(node) {
    if (!node) {
      return;
    }

    if (node.left && node.right) {
      returnArr.push(node.left.value);
      returnArr.push(node.right.value);
    }
    nodeCheckHelper(node.right);
    nodeCheckHelper(node.left);
  }

  nodeCheckHelper(root);
  return returnArr;
}

// VERIFY

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function generateTree(arr) {
  if (arr.length === 0) {
    return null;
  }
  let root = new TreeNode(arr[0]);
  let queue = [root];

  for (let i = 1; i < arr.length; i += 2) {
    let current = queue.shift();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
      current.right = new TreeNode(arr[i + 1]);
      queue.push(current.right);
    }
  }
  return root;
}

let test1 = generateTree([1, 2, 3, null, 4, null, null]);
let test2 = generateTree([12, 3, 4, 1, null, 6, null]);
let test3 = generateTree([12, 3, 4, 1, null, 6, null, 9, 7, null, null]);
let test4 = generateTree([12, 0, -4, 1, null, -6, null]);

console.log(findSiblingNodes(test1)); // [2, 3]
console.log(findSiblingNodes(test2)); // [3, 4]
console.log(findSiblingNodes(test3)); // [3, 4, 9, 7]
console.log(findSiblingNodes(test4));
