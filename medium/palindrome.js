/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^\w]/g,'').toLowerCase();
  let strArr = str.split("").reverse().join('');
  if (strArr === str)
    return true;
  return false;
}

module.exports = isPalindrome;




// ***** learnings ******* //
//    (/[^\w]/g, '')  -  removes any character that is not a word character (alphanumeric + underscore). 
//    /[^\w\s]/g - \s removes includes whitespace characters also not to be removed