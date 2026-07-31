
/*
    # 1. Odd or Even?

    Take a number and find if the number is an odd or even number.
    Print the number and result in the console.
*/

let oddEven = 23;

let answer = oddEven % 2 === 0 ? "Even Number" : "Odd Number";
console.log(`${oddEven} it's a ${answer}.`);


// ###########################################################################

/*
    # 2. Do you have a Driving License?

    Let's check if you are eligible to get a driving license. 
    The eligibility to get a driving licence is 18 years.

    Manage age as a variable.
    Check if the age is elligible for a driving license and print it on the console accordingly.
*/

let age = 37;
let eligibility = age >= 18 ? "it's eligible to drive" : "it's NOT eligible to drive";

console.log(`Age ${age}, ${eligibility}.`);


// ###########################################################################
/* 
    # 3. Calculate CTC with a Bonus 

    CTC stands for Cost to Company, representing the total annual amount an employer spends on an employee. 
    It is not the same as your take-home pay, because it includes extra benefits and taxes. 

    Key Components of CTC

    * Basic Salary: The fixed base amount paid to you before any extras.
    * Allowances: Extra money for housing (HRA), travel, or medical costs.
    * Benefits & Perks: Insurance, retirement funds, bonuses, or food paid by the employer.
    * 
        Let's calculate how much you earn from your office.

        You get 12,300 rupees as your monthly salary.
        You get a 20% bonus on your annual salary.
        How much money do you make per annum as a CTC?
*/

let monthlySalary = 12300;
let bonus = monthlySalary * 0.2;
let annualSalary = (monthlySalary + bonus) * 12;

console.log(`The annual salary its: ${annualSalary}.`);


// ###########################################################################
/*
    # 4. Write a program for the Traffic Light Simulation.

    Red Light... Green Light... Let's Play!

    Create a color variable.
    Based on the color variable's value print in the console if a traveller needs to STOP or GO. 
    The Red color is for STOP and the Green color is for GO.

*/

let color = "Red";
let traveller = color === "Red" ? "STOP!" : "GO!";

console.log(`${color} Light. The traveller must ${traveller}`);


// ###########################################################################
/*
    # 5. Create an Electricity Bill Calculator

    Let's calculate how much you pay for electricity bills per month and annually.

    Create a units variable. Based on this value you will calculate the total electricity bill for a months.
    If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
    If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
*/

let units = 10;
let costPerUnit = 150;

let costPerMonht = (units * costPerUnit) * 30;
let costPerYear = costPerMonht * 12;
let discount = (costPerMonht * 12) * 0.2;
let costPerYearDiscounted = (costPerMonht * 12) - discount;


console.log(`units per DAY: ${units}.`);
console.log(`Total electricity bill for a MONTH: ${costPerMonht}.`);
console.log(`Total electricity bill for a YEAR: ${costPerYear}.`);
console.log(`Total electricity bill for a YEAR with 20% of DISCOUNT: ${costPerYearDiscounted}.`);


// ###########################################################################
/*
    # 6. Leap Year Checker

    Is 2025 a Leap Year?

    Take year as input.
    Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

    A leap year is a year with 366 days instead of 365, adding February 29 as an extra day. 
    It happens roughly every four years to match our calendar with Earth's orbit around the sun.

    The Rules for Leap Years
    Every 4 years: Years you can divide by 4 are leap years (like 2024 or 2028).
    Century exception: Years ending in 00 are not leap years unless you can divide them by 400 
    (like 2000 was a leap year, but 1900 was not).
*/

let year = 2025;
let leapYear = year % 4 === 0 && year % 400 === 0 ? "It's a leap Year" : "It's NOT a leap Year";

console.log(`${year}: ${leapYear}.`);



// ###########################################################################
/*
    7. Max of Three Numbers

    Find the max number from the lot.

    Take three numbers and assign them to variables p, q, and r.
    Now find the maximum of these three numbers using the comparison operators.
*/

let p = 8;
let q = 8;
let r = 5;

let maximumNumber = 
p > q && p > r ? `The MAXIMUM NUMBER is ${p}` : 
q > p && q > r ? `The MAXIMUM NUMBER is ${q}` : 
r > p && r > q ? `The MAXIMUM NUMBER is ${r}` :
p === q && q === r ? `P, Q and R, are all the same number and the value is ${p}` :
p === q ? `P and Q are the MAXIMUM NUMBERS, and the value is ${p}`:
p === r ? `P and R are the MAXIMUM NUMBERS, and the value is ${p}`:
`Q and R are the MAXIMUM NUMBERS, and the value is ${q}`;

console.log(`${maximumNumber}.`);



// ###########################################################################
/*
    8. Bitwise Doubling

    A tricky one for you

    Create a variable count and assign a value, say, 5.
    Now use the Bitwise shift operator to make the number double.
    Print it on the console.

*/

