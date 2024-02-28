/*
'''
❓ PROMPT
You're practicing the Faro shuffle in cardistry (https://www.youtube.com/shorts/UPv0vH-PlQo). You start with red cards in one hand and black cards in the other and try to interweave them perfectly, meaning the colors alternate every card once you merge them into a single deck.

You build a machine that accepts a deck of cards to automatically determine if a deck is a perfect interweave. Currently, it can interpret the card's color; you need to write the algorithm.

Example(s)
isPerfectWeave(["B", "B", "R", "B", "R"]) is false
isPerfectWeave(["R", "B", "R", "B", "B"]) is false
isPerfectWeave(["R", "B", "R", "B", "R", "B", "R", "B", "R", "B", "R", "B"]) is true
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT

def isPerfectWeave(deck: list[str]) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function isPerfectWeave(deck) {
  for (let i = 0; i < deck.length; i++) {
    if (deck[0] === "B") {
      if (i % 2 === 0 && deck[i] === "B") {
        continue;
      } else if (i % 2 === 1 && deck[i] === "R") {
        continue;
      } else {
        return false;
      }
    } else if (deck[0] === "R") {
      if (i % 2 === 0 && deck[i] === "R") {
        continue;
      } else if (i % 2 === 1 && deck[i] === "B") {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
}

function isPerfectWeave(deck) {
  for (let i = 1; i < deck.length; i++)
    if (deck[i - 1] === deck[i]) return false;

  return true;
}

console.log(isPerfectWeave(["R", "R", "R", "R", "R"]) == false);
console.log(isPerfectWeave(["R", "B", "R", "R", "R"]) == false);
console.log(isPerfectWeave(["B", "B", "R", "B", "R"]) == false);
console.log(isPerfectWeave(["R", "B", "R", "B", "B"]) == false);
console.log(isPerfectWeave(["B", "R", "B", "R", "B", "R", "B", "R", "B", "R"]));
console.log(
  isPerfectWeave(["R", "B", "R", "B", "R", "B", "R", "B", "R", "B", "R", "B"])
);
