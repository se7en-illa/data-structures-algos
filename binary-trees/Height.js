function solution(root) {
  if (!root) return 0;
  if (root.value && !root.left && !root.right) return 0;

  return Math.max(solution(root.left), solution(root.right)) + 1;
}
