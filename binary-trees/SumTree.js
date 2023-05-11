function sumTheTreeValues(root) {
  if (!root) return 0;

  return (
    root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
  );
}

function sumTheTreeValues(root) {
  return !root
    ? 0
    : root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}
