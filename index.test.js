import { add, addString, toNumber, filterOrange} from "./index";

test('adds undefined + 2 to equal 3', () => {
  expect(add(undefined, 4)).toBe(NaN);
});

//Question1
describe("addString", () => {
  test('if a and b are string, it returns "ab"', () => {
    const a = "a";
    const b = "b";
    expect(addString(a,b)).toBe("ab");
  });
  test('if a is string and b is 1, it returns "a1"', () => {
    const a = "a";
    const b = 1;
    expect(addString(a,b)).toBe("a1");
  });
  test('if a and b are 1, it returns -1', () => {
    const a = 1;
    const b = 1;
    expect(addString(a,b)).toBe(-1);
  });
})

//Question2
describe("toNumber",() => {
  test('if str is "1", it returns 1', () => {
    const str = 1;
    expect(toNumber(str)).toBe(1);
  });

  test('if str is a, it returns NaN', () => {
    const str = "a";
    expect(toNumber(str)).toBe(NaN);
  });

  test('if str is array, it returns NaN', () => {
    const str = ["hoge","foo"];
    expect(toNumber(str)).toBe(NaN);
  });

  test('if str is undefined, it returns NaN', () => {
    const str = undefined;
    expect(toNumber(str)).toBe(NaN);
  });

  test('if str is null, it returns NaN', () => {
    const str = null;
    expect(toNumber(str)).toBe(NaN);
  });
})

//Question3
describe("filterOrange", () => {
  test('if arr include "Orange", it returns ["orange"]', () => {
    const fruit = ["orange", "apple", "peach"];
    expect(filterOrange(fruit)).toEqual(["orange"]);
  });

  test('if arr dose not include "Orange", it returns []', () => {
    const fruit = ["apple", "peach"];
    expect(filterOrange(fruit)).toEqual([]);
  });
})
