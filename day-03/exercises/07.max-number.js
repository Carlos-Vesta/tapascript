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