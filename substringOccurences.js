function solution(string, target) {
  if (target.length < 1) return 0;

  let count = 0;
  let index = 0;
  let step = target.length;

  while (true) {
    index = string.indexOf(target, index);
    if (index >= 0) {
      count++;
      index += step;
    } else break;
  }
  return count;
}
