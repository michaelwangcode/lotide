// Import the assertEqual function
const assertEqual = require('../assertEqual');

// Import the eqArrays function
const eqArrays = require('../eqArrays');


// Test code for eqArrays.js

// Tests for arrays with primitive values
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL
assertEqual(eqArrays(1, 2), false); // => should FAIL (not arrays)
assertEqual(eqArrays([], []), true); // => should PASS (empty arrays)

// Test nested arrays with recursion
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
assertEqual(eqArrays([{a: [1, 2, 3]}], [{a: [1, 2, 3]}]), true); // => should PASS
