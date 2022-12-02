// Input - String with positive integer's likely between 0-100000 that represents each food item seperated a new line, and each line with a blank space represents a different elf.
// Output - Positive Integer which represents highest calories an elf holds
// Constraints - None
// Edge Cases - Negative numbers/0's


module.exports = function findMostCalorieElf(str) {
  // make sure input is type string
  if (typeof str !== 'string') {
    return -1;
  }

  // remove white spaces but not line breaks /g means to replace all
  str = str.replace(/ /g, '');

  // split by new lines
  const calories = str.split(`\n`);

  // javascript max is 2^31 and 2^31-1. would need to convert to longint
  let max = -Infinity;
  let curCal = -Infinity;

  for (let num of calories) {
    if (num === '') {
      max = Math.max(curCal, max);
      curCal = -Infinity;
      continue;
    }
    if (isNaN(num)) {
      continue;
    }
    num = Number(num);
    if (curCal === -Infinity) {
      curCal = num;
    } else {
      curCal += num;
    }
  }
  max = Math.max(curCal, max);
  if (max === -Infinity) {
    return -1;
  } else {
    return max;
  }
};
