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
  console.log(`${perfectMatch? '✅✅✅' : '🛑🛑🛑'} Assertion ${perfectMatch ? 'Passed' : 'Failed'}: ${actual} ${perfectMatch ? '=' : '!'}== ${expected}`);
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't'])

