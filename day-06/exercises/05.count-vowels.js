/*
    ## 5. Write a function to Count Vowels in a String
    Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.
*/



function countVowels(str) {

    let count = 0;
    let lowerStr = str.toLowerCase();

    for (let i = 0; i < lowerStr.length; i++) {
        if ("aeiou".includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}

let string = "Moçambique";
let vowelsNumber = countVowels(string);
console.log(`The string "${string}", contains ${vowelsNumber} vowels.`);

