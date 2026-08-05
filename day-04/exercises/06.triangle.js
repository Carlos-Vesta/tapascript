/*
    6. Which Triangle?

    A triangle has 3 sides. A Triangle type is determined by its sides:

        All sides equal is called, Equilateral Triangle.
        Two sides equal is called, Isosceles Triangle.
        All sides different is called, Scalene Triangle.

    Take the sides of a triangle as input and write a program to determine the triangle type. 
    Change the inputs everytime manually to see if the output changes correctly.
*/

let sideOne = 3;
let sideTwo = 4;
let sideThree = 6;
let message;


if ((sideOne + sideTwo > sideThree) && (sideOne + sideThree > sideTwo) && (sideTwo + sideThree > sideOne)) {

    if (sideOne === sideTwo && sideOne === sideThree) {
        message = `This is an Equilateral Triangle, because all sides are equal.`;

    } else if (sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree) {
        message = `This is an Isosceles Triangle, because it has two equal sides.`;

    } else {
        message = `This is a Scalene Triangle, because all sides are different.`;
    }

} else {
    message = `Error! These sides cannot form a triangle.`;
}

console.log(`The side values are: ${sideOne}, ${sideTwo} and ${sideThree}.
${message}`);