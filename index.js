function isPalindrome(word) {
  // Reverse the input string
  const reversedWord = word.split('').reverse().join('');

  // If the reversed string is the same as the input, return true
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Pseudocode:
  - Reverse the input string.
  - If the reversed string is the same as the input, return true.
  - Otherwise, return false.
*/

/*
  Written explanation of the solution:
  - We reverse the input string by splitting it into an array of characters, reversing the array, and then joining it back into a string.
  - If the reversed string is the same as the original input, then the word is a palindrome, so we return true. Otherwise, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
