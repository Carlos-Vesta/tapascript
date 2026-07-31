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