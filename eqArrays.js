// Import the eqObjects function
const eqObjects = require('./eqObjects');


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



// Export the eqArrays function
module.exports = eqArrays;
