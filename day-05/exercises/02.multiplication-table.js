/*
    ## 2. Craete Multiplication Table (Using for loop)
    Write a program to print the multiplication table of a given number up to 10.
    For Example: If N = 3, output should be:

    ```bash
    3 x 1 = 3
    3 x 2 = 6
    ...
    3 x 10 = 30
*/

let givenNumber = 5;

for (let i = 1; i <= 10; i++) {
    let multiplication = givenNumber * i;
    console.log(`${givenNumber} * ${i} = ${multiplication}`);
}