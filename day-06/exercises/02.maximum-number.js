/*
    ## 2. Create a Function to Find the Maximum of Two Numbers
    Write a function findMax(num1, num2) that returns the larger of the two numbers. 
    It should work for negative numbers as well.
*/

function findMax(num1, num2) {
    let maximum = num1 > num2 ? num1 : num2; // In real code use Math.max(num1, num2)
    return maximum;
}

const num1 = -18;
const num2 = -20;

console.log(`The maximum number between ${num1} and ${num2} is ${findMax(num1, num2)}.`);
