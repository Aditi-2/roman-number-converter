const arabicRoman = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

export const toRoman = value => {
  let roman = "";
  let arabic = value;
  Object.keys(arabicRoman).forEach(key => {
    while (arabic >= arabicRoman[key]) {
      roman += key;
      arabic -= arabicRoman[key];
    }
  });
  return roman;
};

export const fromRoman = value => {
  const roman = value.trim().toUpperCase();
  let arabic = 0;
  [...roman].forEach((v, i) => {
    arabic =
      arabicRoman[roman[i]] < arabicRoman[roman[i + 1]]
        ? arabic - arabicRoman[roman[i]]
        : arabic + arabicRoman[roman[i]];
  });
  return arabic;
};
