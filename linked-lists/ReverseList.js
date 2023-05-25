function solution(list) {
  if (!list || !list.next) return list;

  let reversedList = solution(list.next);

  list.next.next = list;
  list.next = null;

  return reversedList;
}
