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



// Given a string, return all the indices where a string is found
const letterPositions = function(sentence) {
  const results = {};
  
  // Iterate through the string and count occurences of every letter
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  // Remove space key
  delete results[' '];

  return results;
};



console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [ 3, 5, 15, 18 ]);
