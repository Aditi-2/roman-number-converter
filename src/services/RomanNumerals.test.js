import { fromRoman, toRoman } from "./RomanNumerals";

const correctData = {
  MCMXC: 1990,
  MMVIII: 2008,
  MMMCMXCIX: 3999,
  DCCLXXXIX: 789,
  MDCCLXXVI: 1776
};

const incorrectData = {
  MCMXC: 1991,
  MMVIII: 2001,
  MMMCMXCIX: 2999,
  DCCLXXXIX: 800,
  MDCCLXXVI: 1700
};

test("Should convert to roman", () => {
  Object.keys(correctData).forEach(key => {
    expect(toRoman(correctData[key])).toEqual(key);
  });
});

test("Should not match when provided incorrect value (toRoman)", () => {
  Object.keys(incorrectData).forEach(key => {
    expect(toRoman(incorrectData[key])).not.toEqual(key);
  });
});

test("Should convert to decimal/arabic from roman", () => {
  Object.keys(correctData).forEach(key => {
    expect(fromRoman(key)).toEqual(correctData[key]);
  });
});

test("Should not match when provided incorrect value (from Roman)", () => {
  Object.keys(incorrectData).forEach(key => {
    expect(fromRoman(key)).not.toEqual(incorrectData[key]);
  });
});
