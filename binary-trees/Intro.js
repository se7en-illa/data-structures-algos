/*
    Binary tree vs. Binary search tree
    Coding up basic problems: Height, Sum, Binary Search on a BST
    Complexity analysis of balanced and unbalanced binary search trees

#      10
#   5       15
# 1   7   12   20
#        11

What is a binary tree?
What is the depth of a binary tree?
What is a leaf node in a binary tree?
What does it mean for a binary tree to be balanced?
What is a binary search tree and how's it differ from a normal binary tree?
 Rule: left subtree < root < right subtree

*/

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
/*
  const root = new Node("A", new Node("B"), new Node("C"));
  
  leftLeft,leftRight,rightLeft,rightRight = Node(1),Node(7),Node(12,Node(11)),Node(20)
  left,right = Node(5,leftLeft,leftRight),Node(15,rightLeft,rightRight)
  theRoot = Node(10, left, right)
  
  deleteNotRoot = Node(100, Node(99, Node(98)), Node(101))
  deleteNotRoot.left = null
  #     100
  #       101
  deleteNotRoot.right = None
  # 100
  */

/*
      Calculate the depth of the tree (longest path)
  */

function getDepth(node) {
  if (!node) {
    return 0;
  }

  return Math.max(getDepth(node.left), getDepth(node.right)) + 1;
}

/*
      Calculate the sum of the entire tree
  */

function getSum(node) {
  if (!node) {
    return 0;
  }

  return node.value + getSum(node.left) + getSum(node.right);
}

/*
      Search a binary search tree
  */

function searchBST(root, target) {
  if (root === null) return null;

  if (root.val === target) {
    return root;
  } else if (root.val > target) {
    return searchBST(root.left, target);
  } else {
    return searchBST(root.right, target);
  }
}

function searchBSTIterative(root, target) {
  while (true) {
    if (root === null) return null;

    if (root.val === target) {
      return root;
    } else if (root.val > target) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
}

/*
  Validate if a binary tree is a binary search tree
  */

function isBST(root) {
  if (!root) return true;

  if (root.left !== null && root.left.val > root.val) return false;
  if (root.right !== null && root.right.val < root.val) return false;

  return isBST(root.left) && isBST(root.right);
}
