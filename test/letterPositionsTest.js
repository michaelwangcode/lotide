// Import the letterPositions function
const letterPositions = require('../letterPositions');

// Import the assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual');



// Test statements for letterPositions.js
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [ 3, 5, 15, 18 ]);
