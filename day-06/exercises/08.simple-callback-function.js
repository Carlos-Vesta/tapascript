/*
    ## 8. Create a Simple Callback Function
    Write a function greet(name, callback), where callback prints a message using the name parameter.   

*/


function greet(name, callback) {
    console.log(`Hello ${name}.`);
    callback(name);
}

function myName(name) {
     console.log(`My name is ${name}.`);
}

greet("Carlos", myName);