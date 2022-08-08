// Given a string, return all the indices where a letter is found
const letterPositions = function(sentence) {

  // Create a new object
  const results = {};
  
  // Iterate through the string and count occurences of every letter
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  // Remove space key
  delete results[' '];

  return results;
};



// Export the letterPositions function
module.exports = letterPositions; 
