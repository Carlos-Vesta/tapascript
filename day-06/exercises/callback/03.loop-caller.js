/*
    Exercise 3: The Loop Caller
    Write a function called repeatAction(times, callback).

    Inside the function, write a standard for loop that runs from 1 up to times.
    Inside the loop, call the callback, passing the current loop number (i) to it.

    Your task:

    Write the repeatAction function.
    Create a callback function called printStar. It should take a number and console.log 
    that many asterisks (e.g., if it receives 3, it logs ***). 
    Hint: You can use a small inner loop or string repetition to build the stars, or just 
    log the number itself if building stars is too complex right now.

    Call repeatAction(3, printStar).

    Goal: Practice combining a for loop with a callback. This is exactly how functions like .forEach() 
    work under the hood!

*/

function repeatAction(times, callback) {
    for (let i = 1; i <= times; i++) {
        callback(i);
    }
}

function printStar(num) {
    let aster = "";
    for (let i = 1; i <= num; i++) {
        aster += "* ";
    }

    console.log(aster.trim());
}

repeatAction(3, printStar);
