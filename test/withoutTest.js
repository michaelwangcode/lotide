// Import the without function
const without = require('../without');

// Import the assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual');



// Test statements for without.js
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);