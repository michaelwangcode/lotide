// Return the tail of an array
const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};

// Export the tail function
module.exports = tail;