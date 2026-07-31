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