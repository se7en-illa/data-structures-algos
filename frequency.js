function solution(string) {
  string = string.toLowerCase();
  let freq = {};

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (!freq[letter]) {
      freq[letter] = 1;
    } else {
      freq[letter]++;
    }
  }

  let arrayify = Object.entries(freq).sort((a, b) => b[1] - a[1]);

  return arrayify[0][0];
}
