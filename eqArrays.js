// Checks if two values are equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};



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

    // Otherwise, compare the elements using !==
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};




// Tests for arrays with primitive values
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL

assertEqual(eqArrays(1, 2), false); // => should FAIL (not arrays)
assertEqual(eqArrays([], []), true); // => should PASS (empty arrays)


// Test nested arrays with recursion
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false



