const assertEqual = function(actual, expected) {
  console.log(`${actual === expected ? '✅✅✅' : '🛑🛑🛑'} Assertion ${actual === expected ? 'Passed' : 'Failed'}: ${actual} ${actual === expected ? '=' : '!'}== ${expected}`);
};

// Returns an array of all the keys that match the value
const findKeyByValue = (someObject, someValue) => {
  return Object.keys(someObject).filter(key => someObject[key] === someValue);
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  all_probably: "The Wire"
};


//For test I used the first elem of the array of keys
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire")[0], "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show")[0], undefined);

console.log('The wire is the best in ', findKeyByValue(bestTVShowsByGenre, "The Wire"));