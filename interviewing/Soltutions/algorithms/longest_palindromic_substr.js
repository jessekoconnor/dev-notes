
// Check if ends of a string match
function firstAndLastCharsMatch(string) {
    const firstChar = string[0]
    const lastChar = string[string.length - 1];
    const charsExist = firstChar && lastChar;
    return charsExist && firstChar === lastChar;
}
  
// Remove first and last chars from a string
function getStringWithoutFirstAndLastChars(string) {
    return string.substring(1, string.length - 1);
}
  
// Check if a full string is a palandrome
function stringIsPalandrome(string) {
    const firsAndLastmatch = firstAndLastCharsMatch(string);
    const truncatedString = getStringWithoutFirstAndLastChars(string);

    // console.log({ firsAndLastmatch, truncatedString, string });

    // Zero len string is not a palandrome
    if (string.length === 0) return false;
    // A single char string is a palandrome
    if (string.length === 1) return true;
    // Two char string is a palandrome if the chars match
    if (string.length === 2) return firsAndLastmatch;

    // Recurse until whole string is checked for palindrome
    if(firsAndLastmatch) return stringIsPalandrome(truncatedString);

    return false;
}
  
function longestPalindromicSubstring(string) {
    let longestSoFar = '';
  
    if (string.length === 1) return string;
  
    // use two pointers to get all substrings
    for(let x = 0; x < string.length; x++) {
      for(let y = x; y < string.length + 1; y++) {
        const stringToTest = string.substring(x,y);
  
        const isPal = stringIsPalandrome(stringToTest);
  
        console.log({stringToTest, isPal, x, y, longestSoFar})
  
        if (isPal && stringToTest.length > longestSoFar.length) {
          longestSoFar = stringToTest;
        }
      }
    }
  
    return longestSoFar;
}