/*
    ## 4. Write a Function to Find Factorial of a Number
    Create a function factorial(n) that returns the factorial of n.
    Example 5! = 5 * 4 * 3 * 2 * 1
*/

// 


function factorial(n) {
    // Guard clause: math fact, factorials are undefined for negative numbers
    if (n < 0) return "Undefined for negative numbers";

    // 1 is the multiplicative identity (just like 0 was for addition)
    let result = 1; 

    // Count down from n to 1
    for (let i = n; i >= 1; i--) {
        result = result * i; // or: result *= i;
    }

    return result;
}


const num = 5;
console.log(`Factorial of ${num} is ${factorial(num)}.`);



// 