//TEST/ASSERTION FUNCTIONS
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
//ACTUAL FUNCTION
const middle = function(array) {
  return (array.length <= 2) ? [] : array.slice((array.length - 1) / 2, (array.length / 2) + 1);
};
//TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);