function lonelyinteger(a) {
  let freq = {};
  a.forEach((num) => (!freq[num] ? (freq[num] = 1) : freq[num]++));

  for (let num in freq) {
    if (freq[num] === 1) return num;
  }
}
