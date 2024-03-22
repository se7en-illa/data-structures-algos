/*
'''
❓ PROMPT
You're the manager of a flapjack (pancake) shop. At the end of the day, you get a printed record of every batch of flapjacks added to the serving area and every batch that's removed because an order comes in.

The record looks like a series of positive and negative integers, so that, e.g., [2, -1, 3, -2, -1] means

2 pancakes were taken off the griddle and put on the serving area
1 pancake went out for an order
3 pancakes were added to the griddle
2 pancakes went out for an order
1 pancacke went out for an order

As the manager, you want orders to go out immediately but also don't want too many pancakes piling up in the serving area. You want to make sure that there are never more than 4 pancakes in the stack, waiting to be served, but also that orders of two or less are always served immediately. The stack can be empty, so long as it is refreshed before the next order comes in.

Part 1)
  Write a function that takes an end-of-day record and that returns true or false to indicate whether the constraints were satisfied.

Part 2)
  If the cooks got ahead, you also want to know how far ahead. Modify the function to return a pair. The first item in the pair is the same as in part 1, just true or false indicating whether the constraints were satisfied or not. The second value in the pair should be the maximum height of the stack during the day.

Example(s)
freshFlapjacks([2, -1]) => [true, 2]
freshFlapjacks([-1, 2]) => [false, 1]
freshFlapjacks([2, -1, 3, -3, 2, -1]) => [true, 4]
 
List your assumptions & discoveries:
 - a number greater than 0 means pancakes were added to the serving area
 - a number less than 0 means that pancakes have been served
 - the serving area cannot have more than 4 pancakes at any time
*/

function freshFlapjacks(pancakes) {
  let maxStack = 0;
  let hotPlate = 0;
  let constraints = true;

  for (let i = 0; i < pancakes.length; i++) {
    let move = pancakes[i];
    hotPlate += move;
    if (hotPlate > 4 || hotPlate < 0) constraints = false;
    if (hotPlate > maxStack) maxStack = hotPlate;
  }
  return [constraints, maxStack];
}

console.log(freshFlapjacks([2, -1])); // [true, 2]
console.log(freshFlapjacks([-1, 2])); // [false, 1]
console.log(freshFlapjacks([2, -1, 3, -3, 2, -1])); // [true, 4]
