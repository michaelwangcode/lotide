// Import the flatten function
const flatten = require('../flatten');

// Import the assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual');



// Test statements for flatten.js
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, [4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [], 2, [3, 4], 5, [[[6]]]], []), [1, 2, 3, 4, 5, 6]);
