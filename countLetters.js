const assertEqual = function(actual, expected) {
  console.log(`${actual === expected ? '✅✅✅' : '🛑🛑🛑'} Assertion ${actual === expected ? 'Passed' : 'Failed'}: ${actual} ${actual === expected ? '=' : '!'}== ${expected}`);
};

const countLetters = (sentence) => {
  let count = {};
  for (const char of sentence) {
    if (count[char]) count[char]++;
    else count[char] = 1;
  }

  return count;
};


console.log(countLetters('Counting characters - Warning : case sensitive'));