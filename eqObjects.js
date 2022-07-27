// Check if two values are equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  // If the objects have a different number of keys, return false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // Iterate through the keys 
  for (let key in object1) {
    // If the values for both objects are arrays
    if (Array.isArray(object1[key]) && object2[key]) {
      // If the arrays are not equal, return false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    // Otherwise, compare the two values
    } else {
      // If the values are not equal, return false
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};




// Tests for objects with primitive values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


// Test for objects with arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false