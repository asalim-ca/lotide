const eqArrays = (arr1, arr2) => {
  let sameLength = arr1.length === arr2.length;
  let index = 0;
  if (sameLength)
    while (index < arr1.length && arr1[index] === arr2[index])
      index++;
  return sameLength && index === arr1.length;
};

const assertArraysEqual = function(actual, expected) {
  let perfectMatch = eqArrays(actual, expected);
  console.log(`${perfectMatch ? '✅✅✅' : '🛑🛑🛑'} Assertion ${perfectMatch ? 'Passed' : 'Failed'}: ${actual} ${perfectMatch ? '=' : '!'}== ${expected}`);
};

const without = (source, itemsToRemove) => {
  return source.filter(elm => !itemsToRemove.includes(elm));
};

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);