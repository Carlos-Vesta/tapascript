
/*
2. Build an ATM Cash Withdrawal System

Rajan goes to the Axis bank ATM. He enters an amount to withdraw. 
The ATM only allows multiples of 100. 
Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

*/

let amount = 2250;

if (amount > 0 && amount % 100 === 0) {
    console.log("Withdrawal successful!");

} else {
    console.log("Invalid amount!");
}