// This function takes an object and callback function
// It returns the first key that returns a value of true
const findKey = function(object, callback) {
    
  // Iterate through the object
  for (let key in object) {

    // Apply the callback function on the key and if it returns true, return the key
    if (callback(object[key])) {
      return key;
    }
  }
}



// Export the findKey function
module.exports = findKey; 
