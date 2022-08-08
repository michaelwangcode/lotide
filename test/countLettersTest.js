// Import the countLetters function
const countLetters = require('../countLetters');

// Import the assertEqual function
const assertEqual = require('../assertEqual');



// Test statements for countLetters.js
assertEqual(countLetters("hello world").l, 3);
assertEqual(countLetters("lighthouse in the house").h, 4);
