// This function counts how many times a name appears in an array
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {

  // Create a new object
  const results = {}

  // Iterate through the names to count
  for (const item of allItems) {

    // If the name's value is true, count it
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
}



// Export the countOnly function
module.exports = countOnly;
