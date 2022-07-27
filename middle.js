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



// Return the middle element or elements of an arrany
const middle = function(array) {
  
  let middleArray = [];

  // If the array is 1 or 2 elements, return an empty array
  if (array.length === 1 || array.length === 2) {
    middleArray = [];
  // If the array is odd length, return the middle element
  } else if (array.length % 2 === 1) {
    let middleNumber = (array.length + 1) / 2;
    middleArray = [middleNumber];
  // If the array is even length, return the two middle elements
  } else if (array.length % 2 === 0) {
    let middleNumber1 = (array[(array.length) / 2 - 1]);
    let middleNumber2 = (array[array.length / 2]);
    middleArray = [middleNumber1, middleNumber2];
  }
  
  return middleArray;
};



middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]


// Test cases
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
