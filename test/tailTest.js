// Import the assertEqual function
const assertEqual = require('../assertEqual');

// Import the tail function
const tail = require('../tail');

// Import the eqArrays function
const eqArrays = require('../eqArrays');


// Test code for tail.js
assertEqual(eqArrays(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]), true);
assertEqual(eqArrays(tail(["Hello"]), []), true);

