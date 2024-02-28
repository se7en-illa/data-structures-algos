const { words } = require("lodash");

function solution(text, letters) {
  text = text.split(" ");
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    let word = text[i];
    let typed = true;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if (!/^[a-zA-Z]$/.test(letter)) {
        continue;
      } else if (!letters.includes(letter.toLowerCase())) {
        typed = false;
      }
    }
    count += !typed ? 0 : 1;
    typed = true;
  }

  return count;
}
const { words } = require("lodash");

function solution(text, letters) {
  text = text.split(" ");
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    let word = text[i];
    let typed = true;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if (!/^[a-zA-Z]$/.test(letter)) {
        continue;
      } else if (!letters.includes(letter.toLowerCase())) {
        typed = false;
      }
    }
    count += !typed ? 0 : 1;
    typed = true;
  }

  return count;
}

function solution(balances, requests) {
  const transfer = (i, j, sum) => {
    if (
      i < 1 ||
      i > balances.length ||
      j < 1 ||
      j > balances.length ||
      balances[i - 1] < sum
    ) {
      return false;
    }
    balances[i - 1] -= sum;
    balances[j - 1] += sum;
    return true;
  };
  const deposit = (i, sum) => {
    if (i < 1 || i > balances.length) {
      return false;
    }
    balances[i - 1] += sum;
    return true;
  };
  const withdraw = (i, sum) => {
    if (i < 1 || i > balances.length || balances[i - 1] < sum) {
      return false;
    }
    balances[i - 1] -= sum;
    return true;
  };

  for (let index = 0; index < requests.length; index++) {
    let request = requests[index].split(" ");
    let operation = request[0];
    let i = parseInt(request[1]);
    let j, sum;

    switch (operation) {
      case "transfer":
        j = parseInt(request[2]);
        sum = parseInt(request[3]);
        if (!transfer(i, j, sum)) return [-index - 1];
        break;
      case "deposit":
        sum = parseInt(request[2]);
        if (!deposit(i, sum)) return [-index - 1];
        break;
      case "withdraw":
        sum = parseInt(request[2]);
        if (!withdraw(i, sum)) return [-index - 1];
        break;
      default:
        return [-index - 1];
    }
  }

  return balances;
}
