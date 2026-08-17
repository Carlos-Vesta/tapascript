console.log("Day 06");

// ========== DEFINE OR DECLARE A FUNCTION ==========

function printThis() {
    console.log("printing...");
}

// Call or Invoke a Function
printThis();


// ========== FUNCTION AS AN EXPRESSION ==========   

let printMe = function() {
    console.log("Print Me");
}

printMe();


// ========== PARAMETERS AND ARGUMENTS ========== 

function sum(a, b) {
    const result = a + b;
    // console.log(result);
    return result;
}

let result = sum(5, 10);
console.log(result);


function double(x) {
    return 2 * x;
}
console.log(double(result));


// ========== DEAFAULT PARAMETERS ==========

function calc(a = 0, b = 0) {
    return 2 * (a + b);
}
const resValue = calc();
console.log(resValue);


// ========== REST PARAMETERS ==========

function calculateThis(x, y, ...rest) {
    console.log(x, y, rest);
}
calculateThis(1, 2, 3, 4, 5, 6, 7, 8, 9);

// ========== NESTED FUNCTIONS ==========

function outer() {
    console.log("Outer");

    function inner() {
        console.log("Inner");
    }
    inner();
    // Inner funtion only exist in this scope
}

let retFunc = outer();
// console.log(retFunc());


// ========== CALLBACK FUNCTION ==========

const toCallBuz = true;

function foo(func) {
    console.log("foo");
    if (toCallBuz) {
        func();
    }
}

const buz = function() {
    console.log("buz");
}

foo(buz);


// ========== PURE FUNCTION ==========

function greeting(name) {
    return "Hello " + name;
}
console.log(greeting("Carlos"));


// This is note a pure function, because the OUTPUT sometimes can be diffent from the INPUT

let greetingMsg = "Hola";

function sayHola(name) 
    {return greetingMsg + name;
}

console.log(sayHola(" tapaScript"));
console.log(sayHola(" tapaScript"));

greetingMsg = "Namaste";

console.log(sayHola(" tapaScript"));
console.log(sayHola(" tapaScript"));
console.log(sayHola(" tapaScript"));
console.log(sayHola(" tapaScript"));


// ========== HEIGHER ORDER FUNCTION ==========

function getCamera(camera) {
    camera();
}

getCamera(function() {
    console.log("Sony");
})


function returnFunc(param) {
    return function() {
        if (param === 1) {
            console.log("Hello!");
        }
    }
}

const retThisFunc = returnFunc(3);
retThisFunc();


// ========== ARROW FUNCTION ==========

let greetMe = (greetingMessage) => {
    // Some code here!
    // Another code here!

    return greetingMessage + " great";
}

console.log(greetMe("Hola"));


// ========== IIFE (IMEMEDIATELY INVOKED FUNCTION EXPRESSION) ==========

(function(count) {
    console.log("IIFE", count)
})(1);


// ========== RECURSION ==========

function rec() {
    rec();
}

function fetchWater(count) {
    console.log("Fetching Water...", count);
    if (count === 0) {
        console.log("No more water is left to fetch...");
        return;
    }
    fetchWater(count - 1);
}

fetchWater(5);