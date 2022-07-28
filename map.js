// Check if two arrays are equal
let eqArrays = function(array1, array2) {

  // If either input is not an array, return true
  if (Array.isArray(array1) === false || Array.isArray(array2) === false) {
    return false;
  // If both arrays are empty, return true
  } else if (array1.length === 0 && array2.length === 0) {
    return true;
  // If both arrays are of different size, return false
  } else if (array1.length !== array2.length) {
    return false;
  // Otherwise, iterate and compare each element
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }

  return true;
};



// Prints whether two arrays are equal
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Array of words
const words = ["ground", "control", "to", "major", "tom"];

// This map function takes an array and a function, and applies the function to every element
const map = function(array, callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};


// Return the first letter of every word
const results1 = map(words, word => word[0]);

// Return the uppercase version of each word
const results2 = map(words, word => word.toUpperCase());

// Return the uppercase version of each first letter
const results3 = map(words, word => word[0].toUpperCase());


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
assertArraysEqual(results2, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM'])
assertArraysEqual(results3, ['G', 'C', 'T', 'M', 'T'])


