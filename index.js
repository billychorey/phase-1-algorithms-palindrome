function isPalindrome(word) {
    const reversedString = word.split('').reverse().join('');
    return word.toLowerCase() === reversedString.toLowerCase();
};


/* 
  pseudocode:

  function with one argument that is a string
  save the input string as a variable
  make it lowercase
  look at the characters as an array
  reverse the array
  see if the two are the same
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
