const assertEqual = function(actual, expected) {
  console.log(`${actual === expected ? '✅✅✅' : '🛑🛑🛑'} Assertion ${actual === expected ? 'Passed' : 'Failed'}: ${actual} ${actual === expected ? '=' : '!'}== ${expected}`);
};

const countOnly = function(allItems, itemsToCount) {
  let count = {};
  Object.keys(itemsToCount).forEach(item => {
    if (itemsToCount[item]) {
      let occurence = countOccurence(item, allItems);
      if (occurence) count[item] = occurence;
    }
  });
  return count;
};

const countOccurence = function(item, arr) {
  let count = 0;
  for (const elm of arr)
    count += elm === item;
  return count;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);