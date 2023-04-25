// ==== UNIQUE CHARACTERS

// Implement an algorithm to determine if a string has all unique characters

const isUnique = (string) => {
  const obj = {};
  for (let char of string) {
    !obj[char] ? (obj[char] = 1) : obj[char]++;
    // Result: { c: 1, y: 1, n: 1, t: 1, h: 1, i: 1, a: 1 }
  }
  console.log(obj);

  for (let char in obj) {
    if (obj[char] > 1) {
      return string + " doesn't have unique characters";
    }

    if (obj[char] < 2) {
      return string + ' has unique characters';
    }
  }
};

console.log(isUnique('ondiege'));

// Result not stable
