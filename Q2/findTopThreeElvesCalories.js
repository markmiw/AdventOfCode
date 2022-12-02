// Input - String with positive integer's likely between 0-100000 that represents each food item seperated a new line, and each line with a blank space represents a different elf.
// Output - Positive Integer which represents highest calories an elf holds
// Constraints - None
// Edge Cases - Negative numbers/0's
function insert(arr, num) {
  arr.push(num);
  arr.sort((a, b) => b- a);
  return arr;
}

module.exports = function findTopThreeElvesCalories(str, maxNumOfElves) {
  function insert(queue, curCal) {
    if (queue.length < maxNumOfElves) {
      queue.push(curCal);
      queue.sort((a, b) => b - a);
    } else {
      if (queue[queue.length - 1] < curCal) {
        queue.pop();
        queue.push(curCal);
        queue.sort((a, b) => b - a);
      }
    }
  }
  // make sure input is type string
  if (typeof str !== 'string') {
    return -1;
  }

  // split by new lines
  const calories = str.split(`\n`);
  let queue = [];
  let curCal = 0;

  for (let i = 0; i < calories.length; i++) {
    let num = calories[i];
    if (num === '') {
      insert(queue, curCal);
      curCal = 0;
    } else {
      num = parseInt(num, 10);
      if (!isNaN(num)) {
        curCal += num;
      }
    }
  }

  // check if last elf should be added to queue
  insert(queue, curCal);

  // return sum
  return queue.reduce((a, b) => a + b);
};

