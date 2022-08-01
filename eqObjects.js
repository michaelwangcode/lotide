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

    // If the values for both objects are arrays but not equal,
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

      // If the arrays are not equal, return false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    // If both values are objects
    } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      
      // Compare the objects using recursion
      if (!eqObjects(object1[key], object2[key])) {
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
}





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



// Testing recursion with nested objects
const object1 = {a: "1", b: "2", c: "3", d: {e: "4"}};
const object2 = {a: "1", b: "2", c: "3", d: {e: "4"}};
assertEqual(eqObjects(object1, object2), true);


const object3 = {a: "1", b: {e: {e: "4", f: "4"}}, c: "3", d: {e: "4"}};
const object4 = {a: "1", b: {e: {e: "4", f: "4"}}, c: "3", d: {e: "4"}};
assertEqual(eqObjects(object3, object4), true);


const object5 = {a: "1", b: [{e: {e: "4", f: "4"}}], c: "3", d: {e: "4"}};
const object6 = {a: "1", b: {e: {e: "4", f: "4"}}, c: "3", d: {e: "4"}};
assertEqual(eqObjects(object5, object6), false);


assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false

assertEqual(eqObjects(1,2), false);
assertEqual(eqObjects([1],[1]), false);