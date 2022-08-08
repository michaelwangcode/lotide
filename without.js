// Return an array with unwanted elements removed
const without = function(source, itemsToRemove) {

  // Create a new empty array
  let newArray = [];

  // Iterate through source array
  for (let i = 0; i < source.length; i++) {
    
    // If the item is not one to remove, add it to the new array
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }

  return newArray;
};



// Export the without function
module.exports = without;