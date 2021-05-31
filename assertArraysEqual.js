const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let perfectMatch = eqArrays(actual, expected);
  console.log(`${perfectMatch? '✅✅✅' : '🛑🛑🛑'} Assertion ${perfectMatch ? 'Passed' : 'Failed'}: ${actual} ${perfectMatch ? '=' : '!'}== ${expected}`);
};

module.exports = assertArraysEqual;
