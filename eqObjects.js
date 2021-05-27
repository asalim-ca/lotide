const assertEqual = function(actual, expected) {
  console.log(`${actual === expected ? '✅✅✅' : '🛑🛑🛑'} Assertion ${actual === expected ? 'Passed' : 'Failed'}: ${actual} ${actual === expected ? '=' : '!'}== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
  let sameLength = arr1.length === arr2.length;
  let index = 0;
  if (sameLength)
    while (index < arr1.length && arr1[index] === arr2[index])
      index++;
  return sameLength && index === arr1.length;
};

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let sameKeysSize = keys1.length === keys2.length;
  let index =0;

  if (sameKeysSize)
    while (index < keys1.length && (object1[keys1[index]] === object2[keys1[index]] || eqArrays(object1[keys1[index]], object2[keys1[index]])))
      index++;

  return sameKeysSize && index === keys1.length;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, cd2), false);

