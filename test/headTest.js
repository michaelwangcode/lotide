// Import the assertEqual function
const assertEqual = require('../assertEqual');

// Import the head function
const head = require('../head');

// Test code for head.js
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([1]), 1);
assertEqual(head([[1]]), 1);
assertEqual(head([]), undefined);
