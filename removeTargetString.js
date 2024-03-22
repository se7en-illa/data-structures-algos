function solution(string, target, f) {
  while (f > 0 && string.startsWith(target)) {
    string = string.slice(target.length);
    f--;
  }

  return string;
}
