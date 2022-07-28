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


// This function takes an array and callback function
// It will return elements in the array until a truthy value
const takeUntil = function(array, callback) {
  let results = [];
  
  // Iterate through the array values
  for (let value of array) {
    
    // If the callback is false add the value to the results array, otherwise break
    if (!callback(value)) {
      results.push(value);
    } else {
      break;
    }
  }

  return results;
};


// Test statements
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


const data3 = [2, 6, 4, 12, 5, 40, 9, 4, 2, 3];
let results3 = takeUntil(data3, x => x % 2 === 1);

// Test assertions
assertArraysEqual(results3, [2, 6, 4, 12]);

