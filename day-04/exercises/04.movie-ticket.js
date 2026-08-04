
/*
    4. Pay for your movie ticket

    Imagine, the INOX charges ticket prices based on age:

        Children (<18 years): $3
        Adults (18 - 60 years): $10
        Seniors (60+ years): $8

    Write a program that prints the ticket price based on the person’s age.
*/

let age = 61;
let ticketPrice;

if (age < 18) {
    ticketPrice = 3;

} else if (age <= 60) {
    ticketPrice = 10;

} else {
    ticketPrice = 8;
}

console.log(`For people with ${age} years old, the Ticket Price is ${ticketPrice} dolars.`);
