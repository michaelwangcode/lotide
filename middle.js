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



// Export the middle function
module.exports = middle;
