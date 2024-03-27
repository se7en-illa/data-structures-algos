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

/////////////////////////////////////////////////

function longestOverlap(intervals) {
  let maxOverlap = 0;
  let bestPair = null;

  for (let i = 0; i < intervals.length; i++) {
      for (let j = i + 1; j < intervals.length; j++) {
          const overlap = Math.max(0, Math.min(intervals[i][1], intervals[j][1]) - Math.max(intervals[i][0], intervals[j][0]));
          if (overlap > maxOverlap) {
              maxOverlap = overlap;
              bestPair = [intervals[i], intervals[j]];
          }
      }
  }

  return bestPair;
}

const intervals = [[3, 10], [2, 20], [5, 14]];
console.log(longestOverlap(intervals));

/*

The time complexity of this solution is O(n^2), where n is the number of intervals. 
This is because the function uses nested loops to compare each interval with every other interval,
 resulting in a quadratic time complexity.

The space complexity of this solution is O(1), 
which means it uses a constant amount of space regardless of the input size. 
This is because the function only uses a fixed number of variables
 (maxOverlap, bestPair, overlap, i, j) and does not create any additional data structures 
 that grow with the input size.
 
*/

/////////////////////////////////////////////////

import Image from "next/image";

class TextFitter {
  constructor() {
    // Create an off-screen canvas element
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    // Get the width of the user's screen
    this.screenWidth = window.innerWidth;
  }

  // Measure the width of a text string with a given font
  measureTextWidth(text, font) {
    this.ctx.font = font;
    return this.ctx.measureText(text).width;
  }

  // Check if a text string fits within the user's screen width
  fitsOnScreen(text, font) {
    const textWidth = this.measureTextWidth(text, font);
    return textWidth <= this.screenWidth;
  }
}

export default function Home() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = "24px Helvetica"; // Set the font style and size
  const text = "Hello, world!";
  const textWidth = ctx.measureText(text);
  console.log("Text width:", textWidth);

  // Example usage
  const textFitter = new TextFitter();
  const font = "16px Arial";
  const font2 = "160px Times New Roman";
  const font3 = "24px Helvetica";

  const text1 = "Hello, world!";
  const text2 = "This is a longer text that may or may not fit on the screen.";

  console.log(font, textFitter.fitsOnScreen(text1, font));
  console.log(font, textFitter.fitsOnScreen(text2, font));
  console.log(font2, textFitter.fitsOnScreen(text2, font2));
  console.log(font3, textFitter.fitsOnScreen(text2, font3));

  return (
    <main className="bg-black flex text-center justify-center">
      <div>
        <h1 className="text-3xl text-white">CLASSES TEST</h1>
      </div>
    </main>
  );
}
