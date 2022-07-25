const args = process.argv;

// Reverses an array of strings and prints them one by one
const reverse = function(args)
{
  let array = args.slice(2);
  console.log(array);
  for (let word of array)
  {
    console.log(reverseString(word));
  }
}

// Reverses a single string
const reverseString = function(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}

reverse(args);