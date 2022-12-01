let findMostCalorieElf = require('../Q1/findMostCalorieElf.js');
describe("Question 1: Highest Elf Calorie Function", () => {
  test("it should be able to handle negative strings", () => {
    const input = `-1000
    -100`;

    const output = -1;

    expect(findMostCalorieElf(input)).toEqual(output);
  });
  test("it should be able incorrect ", () => {
    const input = `-1000
    a b 100
    1000
    ./sge`;

    const output = -1;

    expect(findMostCalorieElf(input)).toEqual(output);
  });
});
