const assertEqual = function(actual, expected) {
  console.log(`Assertion ${actual === expected ? 'Passed' : 'Failed'}: ${actual} ${actual === expected ? '=' : '!'}== ${expected}`);
};
