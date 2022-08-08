// Return the key of an object given a value
const findKeyByValue = function(object, value) {

  // Iterate through the keys in the object
  for (let key in object) {

    // If the value is found, return the key
    if (object[key] === value) {
      return key;
    }
  }

  // If value is not found, return undefined
  return undefined;
};



// Export the findKeyByValue function
module.exports = findKeyByValue; 
