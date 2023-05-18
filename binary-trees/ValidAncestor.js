/*
'''
Valid Ancestor

Given a binary tree of numbers, and two numbers, A and B, determine if A is an ancestor of B.
 

EXAMPLE(S)
  3
1   2
A=3 and B=1 returns true
A=3 and B=2 returns true
A=2 and B=3 returns false

  3
1   2
   4 5
A=3 and B=5 returns true
A=2 and B=5 returns true
A=5 and B=2 returns false


EXPLORE:
// root or ancestor or descendent is null

BRAINSTORM:
// iterative
// recursive

PLAN:
// if !root return false
// stack = root
// while stack.length > 0
// node = stack.pop

// node.value === ancestor
// --> helper(node, descendent)

// node.right !== null stack push node right
// node.left !== null stack push node left
*/

function isDescendent(node, target) {
  if (!node) return false;
  if (node.value === target) return true;

  return isDescendent(node.left, target) || isDescendent(node.right, target);
}

// function validAncestor(root, ancestor, descendent) {
//   if (!root) return false;
//   if (root.value === ancestor && root.value === descendent) return false;
//   if (root.value === ancestor) return isDescendent(root, descendent);

//   return validAncestor(root.left, ancestor, descendent) || validAncestor(root.right, ancestor, descendent)
// }

function validAncestor(root, ancestor, descendent) {
  if (!root) return false;
  if (root.value === ancestor) return isDescendent(root, descendent);

  const stack = [root];

  while (stack.length > 0) {
    let current = stack.pop();
    if (current.value === ancestor && current.value === descendent)
      return false;
    if (current.value === ancestor) {
      return isDescendent(current, descendent);
    }

    if (current.right !== null) {
      stack.push(current.right);
    }
    if (current.left !== null) {
      stack.push(current.left);
    }
  }
  return false;
}

function validAncestor(root, ancestor, descendent) {
  function dfs(root, foundAncestor = false) {
    if (!root) return false;
    if (root.val === descendent) return foundAncestor;

    if (root.val === ancestor && !foundAncestor) return dfs(root, true);

    return dfs(root.left, foundAncestor) || dfs(root.right, foundAncestor);
  }
  return dfs(root);
}

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

//    1
//  3   2
//     5 9
let tree = new TreeNode(
  1,
  new TreeNode(3, null, null),
  new TreeNode(2, new TreeNode(5, null, null), new TreeNode(9, null, null))
);

console.log(validAncestor(tree, 2, 2)); // false
console.log(validAncestor(tree, 1, 2)); // true
console.log(validAncestor(tree, 1, 7)); // false
console.log(validAncestor(tree, 1, 9)); // true

//   0
// 1   2
//    3 4
tree = new TreeNode(
  0,
  new TreeNode(1, null, null),
  new TreeNode(2, new TreeNode(3), new TreeNode(4))
);
console.log(validAncestor(tree, 3, 4)); // false
