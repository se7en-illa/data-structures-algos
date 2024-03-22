function solution(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    let index = alphabet.indexOf(letter);

    if (letter === "z") {
      result += alphabet[0];
    } else {
      result += alphabet[index + 1];
    }
  }

  return result;
}
