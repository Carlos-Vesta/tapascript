/*
    ## 5. Reverse Digits of a Number (Using while loop)
    Write a program to reverse the digits of a given number using a while loop.

    Input: 6789
    Output: 9876
*/


let original = 1234;      // keep the input safe for the final message
let n = original;         // the working copy we will chop down
let reversed = 0;         // accumulator: "nothing built yet"

while (n > 0) {                       // stop when no digits are left
    let digit = n % 10;               // Q1: see the last digit
    reversed = reversed * 10 + digit; // Q3: shift left, add the digit
    n = Math.floor(n / 10);           // Q2: chop the last digit (the progress)
}

console.log(`The reverse of ${original} is ${reversed}.`);

