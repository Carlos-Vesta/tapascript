
/*
    3. Build a Calculator with switch-case

    Write a simple calculator that takes an operator (+, -, , /, %) as input, 
    and performs the operation on two numbers. Print the output on the console.

*/

let number1 = 5;
let number2 = 0;
let operator = "+";
let result;


switch (operator) {
    case "+":
        result = number1 + number2;
        break;

    case "-":
        result = number1 - number2;
        break;

    case "*":
        result = number1 * number2;
        break;

    case "/":
         if (number2 === 0) {
            console.log(`Error! It's not allowed to divid by zero (0)`);
            // console.log(`${number1} ${operator} ${number2} = ${result}`);
         }

        result = number1 / number2;
        break;

    default:
        console.log("Wrong operation.")
}

console.log(`${number1} ${operator} ${number2} = ${result}`);