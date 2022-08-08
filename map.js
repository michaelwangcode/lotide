// This function takes an array and a function, and applies the function to every element
const map = function(array, callback) {

  // Create a new blank array
  const results = [];

  // Iterate through the items in the array
  for (let item of array) {

    // Apply the callback function to each item
    results.push(callback(item));
  }

  return results;
};



// Export the map function
module.exports = map;
