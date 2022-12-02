// Input - String A/B/C
// Output - Positive Integer with total score
// Constraints - None
// Edge Cases - None
module.exports = function calculateStrategyGuide(guide) {
  // A = Rock, B = Paper, C = Sciscors
  // X = Rock, Y = Paper, Z = Sciscors
  // Rock = 1, Paper = 2, Sciscors = 3
  // Lose = 0, Tie = 3, Win = 6
  const pointMap = {AX: 4, AY: 8, AZ: 3, BX: 1, BY: 5, BZ: 9, CX: 7, CY: 2, CZ: 6};

  let guideArr = guide.split('\n');
  let sum = 0;
  for (let i = 0; i < guideArr.length; i++) {
    const play = guideArr[i].replace(/ /g, '');
    if (play in pointMap) {
      sum += pointMap[play];
    }
  }
  return sum;
};

// const input = `A Y
// B X
// C Z`;

// console.log(calculateStrategyGuide(input));
