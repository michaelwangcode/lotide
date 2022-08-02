// Import Chai
const assert = require('chai').assert;

// Import the assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual');

// Import the middle function
const middle = require('../middle');


// Test code for middle.js
describe("#middle", () => {

  it("returns [] for [[1]]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for [[1, 2]]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for [[1, 2, 3]]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] for [[1, 2, 3, 4, 5]]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for [[1, 2, 3, 4]]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3] for [[1, 2, 3, 4, 5, 6]]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});
