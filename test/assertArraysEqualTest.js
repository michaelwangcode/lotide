// Import the assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual');


// Test code
assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false
assertArraysEqual(1, 2); // => should FAIL (not arrays)
assertArraysEqual([], []); // => should PASS (empty arrays)
