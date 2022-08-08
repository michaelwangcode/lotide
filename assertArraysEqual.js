// Import the eqArrays function
const eqArrays = require('./eqArrays');



// Prints whether two arrays are equal
const assertArraysEqual = function(actual, expected) {
  
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};



// Export the assertArraysEqual function
module.exports = assertArraysEqual;
