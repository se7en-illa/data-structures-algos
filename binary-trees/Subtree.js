class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isSubtree(root, target) {
  if (root === null) {
    return false;
  }

  if (isSameTree(root, target)) {
    return true;
  }

  return isSubtree(root.left, target) || isSubtree(root.right, target);
}

function isSameTree(tree1, tree2) {
  if (tree1 === null && tree2 === null) {
    return true;
  }

  if (tree1 === null || tree2 === null) {
    return false;
  }

  return (
    tree1.value === tree2.value &&
    isSameTree(tree1.left, tree2.left) &&
    isSameTree(tree1.right, tree2.right)
  );
}
