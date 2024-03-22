let array = ["Dogs", "Cats", "Music", "Sports", "Coding"];

/*
edge cases:
can the array be empty?
does capitalization matter?
*/

function getString(arr) {
  if (!arr.length) return "";

  return `${arr.slice(0, arr.length - 1).join(", ")}, and ${
    arr[arr.length - 1]
  }`;
}

/*
edge cases:
can the array be empty?
can the limit be negative?
does capitalization matter?

brainstorm:
i need to account for if there is only 1 topic remaining to change the language
*/

function getStringWithTopicLimit(arr, limit) {
  let fullWords = arr.slice(0, limit);
  let remaining = arr.slice(limit, arr.length).length;

  return `${fullWords.join(", ")}, and ${remaining} other ${
    remaining === 1 ? "topic" : "topics"
  }.`;
}

/*
edge cases:
can the array be empty?
can the character limit be negative?

brainstorm: I need to keep track of the maximum length of the ending string. If the character count of the first word + the length of the string ending is less than the limit, i can't make the string.
*/

function getStringWithCharLimit(arr, charLimit) {
  let maxEndLength = "and xx other topics".length; // can make this more dynamic by using wordsRemaining
  let finalString = "";
  let wordsRemaining = arr.length;

  for (let i = 0; i < arr.length; i++) {
    let currentWord = arr[i];
    let nextPhrase = `${currentWord}, `;

    if (finalString.length + nextPhrase.length + maxEndLength <= charLimit) {
      finalString += nextPhrase;
      wordsRemaining--;
    } else {
      break;
    }
  }

  return `${finalString}and ${wordsRemaining} other ${
    wordsRemaining === 1 ? "topic" : "topics"
  }.`;
}

console.log(getString(array));
console.log(getStringWithTopicLimit(array, 3));
console.log(getStringWithCharLimit(array, 30));
