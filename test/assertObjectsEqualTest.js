// Import the assertObjectsEqual function
const assertObjectsEqual = require('../assertObjectsEqual');



// Test statements for assertObjectsEqual.js

// Tests for objects with primitive values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

// Test for objects with arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true
