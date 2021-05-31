const assert = require('chai').assert;
const tail = require('../tail');

// TEST CODE (Using Mocha and Chai)

describe('#tail', () =>{
  it("tail of [1, 2, 3, 4, 5] should be [2, 3, 4, 5]", ()=> {
    const inputArray = [1, 2, 3, 4, 5];
    const expectedArray = [2, 3, 4, 5];
    assert.deepEqual(tail(inputArray), expectedArray)
  });
});