// Import the takeUntil function
const takeUntil = require('../takeUntil');

// Import the assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual');



// Test statements for takeUntil.js
assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(takeUntil([2, 6, 4, 12, 5, 40, 9, 4, 2, 3], x => x % 2 === 1), [2, 6, 4, 12]);
