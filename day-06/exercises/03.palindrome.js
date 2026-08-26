/*
    ## 3. Function to Check if a String is a Palindrome
    Create a function isPalindrome(str) that checks if a given string is a palindrome 
    (reads the same forward and backward). You can not use any string function that 
    we have not learned in the series so far.
 */

// =============== MY IDEIA ===============

   let strGiven = "fifo";
   let strReversed = "";

   function isPalindrome(str) {
      for (let i = str.length - 1; i >= 0 ; i--) {
         strReversed += str[i];
      }
      
      if (strGiven === strReversed) {
         return `Is Palindrome, because "${strGiven}" is "${strReversed}" in backward.`;
      } else {
         return `Is NOT Palindorme, because "${strGiven}" is not "${strReversed}" in backward.`;
      }
   }

   console.log(isPalindrome(strGiven));


// =============== IMPROVIMENT WITH AI ===============

function isPalindrome(str) {
    let reversed = "";                    // inside → resets on every call

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];               // your loop, unchanged — it was right
    }

    return str === reversed;              // the comparison IS the boolean
}

// Demo: the caller owns the presentation
const word = "fifo";
console.log(`"${word}" ${isPalindrome(word) ? "is" : "is not"} a palindrome.`);

// Tests: positives, negatives, edges, and re-use
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("abba"));     // true
console.log(isPalindrome("a"));        // true
console.log(isPalindrome(""));         // true
console.log(isPalindrome("fifo"));     // false
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("abba"));     // true AGAIN — proves the reset works


function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;      // return exits the WHOLE function, mid-loop
        }
    }
    return true;               // survived every pair → palindrome
}



  