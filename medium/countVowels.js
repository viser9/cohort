/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count = 0;
    str = str.replace(/\s/g,'').toLowerCase();
    const newStr = str.split('');
    for(let i=0;i<newStr.length;i++){
      if(newStr[i] === "a" || newStr[i] ==='e' || newStr[i] ==='i' || newStr[i] ==='o' || newStr[i] ==='u')
        count++;
    }
    return count;
    
}

module.exports = countVowels;



/////////////////////////////////////////////////////////////////////////////////

//*learnings//

//if(newStr[i] === 'a' || 'e' || 'i' || 'o' || 'u') not working instead use
//if(newStr[i] === "a" || newStr[i] ==='e' || newStr[i] ==='i' || newStr[i] ==='o' || newStr[i] ==='u')
//The problem is that each part of the condition after the || (logical OR) is treated as a separate expression, and the non-empty string literals like 'e', 'i', 'o', and 'u' are considered truthy values in JavaScript.