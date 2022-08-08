// Import the tail function
const tail = require('../tail');

// Import the assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual');



// Test statements for tail.js
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertArraysEqual(tail(["Hello"]), []);
