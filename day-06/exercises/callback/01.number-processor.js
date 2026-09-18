/*
    Exercise 1: The Number Processor
    Write a function called processNumber(num, callback).

    Inside the function, call the callback, passing num to it.

    Your task:

    1. Write the processNumber function.
    2. Create a callback function called printDouble. 
    It should take a number, multiply it by 2, and console.log the result.
    3. Call processNumber(5, printDouble). (It should print 10).   
    Goal: Practice passing a number through a callback instead of a string.
*/

function processNumber(num, callback) {
    callback(num);

}

function printDouble(num) {
    console.log(num * 2);
}

processNumber(5, printDouble);