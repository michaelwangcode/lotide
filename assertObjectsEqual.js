// Import the eqObjects function
const eqObjects = require('./eqObjects');



// Prints whether two objects are equal
const assertObjectsEqual = function(actual, expected) {

  // Import inspect function
  const inspect = require('util').inspect; 

  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



// Export the assertObjectsEqual function
module.exports = assertObjectsEqual;
