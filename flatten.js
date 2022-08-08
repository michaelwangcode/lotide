// This function flattens an array so there are no nested arrays
const flatten = function (array) {

  // Create a new empty array
  let resultArray = [];

  // Iterate through the array one element at a time
  for (let i = 0; i < array.length; i++) {

    // If an element is a nested array
    if (Array.isArray(array[i])) {

      // Run the flatten function on the nested array and add it to the result array
      resultArray = resultArray.concat(flatten(array[i]));

    // Othewise, add the element to the array
    } else {
      resultArray.push(array[i]);
    }
  }

  return resultArray;
}



// Export the flatten function
module.exports = flatten;