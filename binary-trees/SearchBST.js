function searchBST(root, target) {
  let curr = root;

  while (curr) {
    if (curr.value === target) {
      return true;
    } else if (curr.value < target) {
      curr = curr.right;
    } else {
      curr = curr.left;
    }
  }
  return false;
}
