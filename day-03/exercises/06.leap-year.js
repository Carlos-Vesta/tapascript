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