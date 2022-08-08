// Import the map function
const map = require('../map');

// Import the assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual');



// Test statements for map.js
assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word.toUpperCase()), ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0].toUpperCase()), ['G', 'C', 'T', 'M', 'T']);
