// Import the assertEqual function
const assertEqual = require('../assertEqual');

// Import the eqObjects function
const eqObjects = require('../eqObjects');

// Import the eqArrays function
const eqArrays = require('../eqArrays');



// Test code for eqObjects.js

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


// Testing nested objects with recursion
const object1 = {a: "1", b: "2", c: "3", d: {e: "4"}};
const object2 = {a: "1", b: "2", c: "3", d: {e: "4"}};
assertEqual(eqObjects(object1, object2), true);

const object3 = {a: "1", b: {e: {e: "4", f: "4"}}, c: "3", d: {e: "4"}};
const object4 = {a: "1", b: {e: {e: "4", f: "4"}}, c: "3", d: {e: "4"}};
assertEqual(eqObjects(object3, object4), true);

const object5 = {a: "1", b: [{e: {e: "4", f: "4"}}], c: "3", d: {e: "4"}};
const object6 = {a: "1", b: {e: {e: "4", f: "4"}}, c: "3", d: {e: "4"}};
assertEqual(eqObjects(object5, object6), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false

assertEqual(eqObjects(1,2), false);
assertEqual(eqObjects([1],[1]), false);
