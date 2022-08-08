// This function takes an array and callback function
// It will return elements in the array until a there is truthy value
const takeUntil = function(array, callback) {

  // Create a new empty array
  let results = [];
  
  // Iterate through the array values
  for (let value of array) {
    
    // If the callback is false add the value to the results array, otherwise break
    if (!callback(value)) {
      results.push(value);
    } else {
      break;
    }
  }

  return results;
};



// Export the takeUntil function
module.exports = takeUntil;