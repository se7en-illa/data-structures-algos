/*
'''
Match Fellows by skill level

Given an input dictionary mapping Fellows (as string names) to skill ratings, return true if you're able to pair up Fellows with matching skill ratings with no Fellows leftover.
 

EXAMPLE(S)
skillMap = {"oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5}
canMatchFellows(skillMap) == True

skillMap = {"oliver": 3, "pixel": 4, "pinky": 5, "tobey": 5}
canMatchFellows(skillMap) == False
 

FUNCTION SIGNATURE
function canMatchFellows(skillMap) {
def canMatchFellows(skillMap: dict) -> bool:
'''

// if the length is not even, return false

// looping through the input
if that value doesnt exist, we'll add it,
if it already exists
delete

return size === 0 return true : false

inp = [3, 3, 1, 2, 2, 3]
set = {1, 3}
*/

function canMatchFellows(skillMap) {
  if (Object.keys(skillMap).length % 2 !== 0) return false;

  let dupSet = new Set();

  for (const key in skillMap) {
    if (!dupSet.has(skillMap[key])) {
      dupSet.add(skillMap[key]);
    } else {
      dupSet.delete(skillMap[key]);
    }
  }
  return dupSet.size === 0;
}

let skillMap = { oliver: 3, pixel: 3, pinky: 5, tobey: 5 };
console.log(canMatchFellows(skillMap) == true);

skillMap = { oliver: 3, pixel: 4, pinky: 5, tobey: 5 };
console.log(canMatchFellows(skillMap) == false);

skillMap = { oliver: 3, pixel: 3, pinky: 3 };
console.log(canMatchFellows(skillMap) == false);

skillMap = { oliver: 3, pixel: 3, pinky: 5, tobey: 5, paavo: 1 };
console.log(canMatchFellows(skillMap) == false);

skillMap = { oliver: 3, pixel: 3, pinky: 3, tobey: 3 };
console.log(canMatchFellows(skillMap) == true);

console.log(canMatchFellows({ oliver: 1 }) == false);

console.log(canMatchFellows({}) == true);
