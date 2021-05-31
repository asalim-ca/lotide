const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE

console.log(assertEqual(head([1111,2,3,4,5]), 1111))
console.log(assertEqual(head([1121,2,3,4,5]), 1111))