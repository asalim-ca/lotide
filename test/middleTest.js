const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () =>{
  it("middle of [1, 2, 3, 4, 5] should be [3]", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const expectedArray = [3];
    assert.deepEqual(middle(inputArray), expectedArray)
  });

  it("middle of [1, 2, 3, 4, 5, 6] should be [3, 4]", () => {
    const inputArray = [1, 2, 3, 4, 5, 6];
    const expectedArray = [3, 4];
    assert.deepEqual(middle(inputArray), expectedArray)
  });
});
// TEST CODE
