// Return the tail of an array
const tail = function(array) {

  // Take a slice of the array after the 1st element
  let newArray = array.slice(1);
  return newArray;
};



// Export the tail function
module.exports = tail;