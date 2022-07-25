const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


let originalArray = ["Hello", "Lighthouse", "Labs"];
let tailArray = tail(originalArray);

console.log(originalArray);
console.log(tailArray);

let originalArray2 = ["Hello"];
let tailArray2 = tail(originalArray2);

console.log(originalArray2);
console.log(tailArray2);