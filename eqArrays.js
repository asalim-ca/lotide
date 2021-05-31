const eqArrays = (arr1, arr2) => {
  let sameLength = arr1.length === arr2.length;
  let index = 0;
  if (sameLength)
    while (index < arr1.length && arr1[index] === arr2[index])
      index++;
  return sameLength && index === arr1.length;
};

module.exports = eqArrays;