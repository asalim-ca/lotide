const assertEqual = function(actual, expected) {
  console.log(`${actual === expected ? '✅✅✅' : '🛑🛑🛑'} Assertion ${actual === expected ? 'Passed' : 'Failed'}: ${actual} ${actual === expected ? '=' : '!'}== ${expected}`);
};
