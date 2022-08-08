// Import the eqArrays function - Doesn't work for some reason so function is pasted instead
//const eqArrays = require('./eqArrays');



// Check if two arrays are equal
let eqArrays = function(array1, array2) {

  // If either input is not an array, return false
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }

  // If both arrays are empty, return true
  if (array1.length === 0 && array2.length === 0) {
    return true;
  }

  // If both arrays are of different sizes, return false
  if (array1.length !== array2.length) {
    return false;
  }

  // Iterate and compare each element
  for (let i = 0; i < array1.length; i++) {

    // If both elements are arrays,
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {

      // Compare the arrays using recursion
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    
    // If both values are objects,
    } else if (typeof array1[i] === 'object' && typeof array2[i] === 'object') {

      // Compare the objects using recursion
      if (!eqObjects(array1[i], array2[i])) {
        return false;
      }

    // Otherwise, compare the elements using !==
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};



// Returns true if both objects have identical keys and values
// Uses recursion to handle nested objects
let eqObjects = function(object1, object2) {

  // If either argument is an array, return false
  if (Array.isArray(object1) || Array.isArray(object2)) {
    return false;
  }

  // If either argument is not an object, return false
  if (typeof object1 !== 'object' || typeof object2 !== 'object') {
    return false;
  }

  // If the objects have a different number of keys, return false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // Iterate through the keys
  for (let key in object1) {

    // If both values are arrays,
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

      // If the arrays are not equal, return false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    // If both values are objects,
    } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      
      // Compare the objects using recursion
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    // Otherwise, compare the two values using !==
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};



// Export the eqObjects function
module.exports = eqObjects;
