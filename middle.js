const middle = function(array) {
  return (array.length <= 2) ? [] : array.slice((array.length - 1) / 2, (array.length / 2) + 1);
};

module.exports = middle;