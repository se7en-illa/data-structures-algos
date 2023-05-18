function hasSingleChildren(root, result = []) {
  if (!root) return result;

  traverse(root);

  function traverse(node) {
    if (!node) return;

    if (
      (node.left === null && node.right !== null) ||
      (node.left !== null && node.right === null)
    ) {
      result.push(node.value);
    }

    traverse(node.left);
    traverse(node.right);
  }

  return result;
}
