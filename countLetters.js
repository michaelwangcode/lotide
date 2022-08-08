// Counts the number of times each letter appears in a string
const countLetters = function(string) {

  // Remove spaces from string
  let stringWithoutSpaces = string.split(' ').join('');

  // Create object to hold letter counts
  let letterCount = {};

  // Iterate through the string and count occurences of every letter
  for (let letter of stringWithoutSpaces) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }

  return letterCount;
};



// Export the countLetters function
module.exports = countLetters;
