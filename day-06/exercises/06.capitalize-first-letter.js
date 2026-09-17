/*
    ## 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
    Write a function capitalizeWords(sentence) that takes a sentence and capitalizes 
    the first letter of each word. You can use the toUpperCase() method of string to 
    convert the lowercase to uppercase.
*/


/******************************************
    ########## My Code ##########

    // function capitalizeWords(sentence) {

//     let sentenceInUpperCase = sentence.toUpperCase().trim(); 
//     let sentenceInWords = sentenceInUpperCase.split(" ");
//     let firstLetterCapitalized;
//     let restOfWord;
//     let wordCapitalized;
//     let fullSentenceCapitalize = "";
    

//     for (let i = 0; i < sentenceInWords.length; i++) {
//         firstLetterCapitalized = sentenceInWords[i][0];
//         restOfWord = sentenceInWords[i].slice(1).toLowerCase();
//         wordCapitalized = firstLetterCapitalized + restOfWord;
//         fullSentenceCapitalize += wordCapitalized + " ";
//     }

//     return fullSentenceCapitalize;
// }

// let mySentence = "all you want is love     ";
// console.log(capitalizeWords(mySentence));
// console.log(capitalizeWords("NOTHING iS bETter tHAn tHIS."));

**********************/


function capitalizeWords(sentence) {
    // 1. Uppercase everything and trim the edges (Your brilliant shortcut!)
    let sentenceInUpperCase = sentence.toUpperCase().trim(); 
    let sentenceInWords = sentenceInUpperCase.split(" ");
    
    let fullSentenceCapitalize = "";

    for (let i = 0; i < sentenceInWords.length; i++) {
        let currentWord = sentenceInWords[i];

        // 2. Guard clause: Skip empty strings from double spaces
        if (currentWord === "") {
            continue;
        }

        // 3. Your clever transformation
        let firstLetterCapitalized = currentWord[0]; // Already uppercase!
        let restOfWord = currentWord.slice(1).toLowerCase(); // Make the rest lowercase
        let wordCapitalized = firstLetterCapitalized + restOfWord;
        
        // 4. Accumulate
        fullSentenceCapitalize += wordCapitalized + " ";
    }

    // 5. Return with .trim() to remove the final extra space
    return fullSentenceCapitalize.trim();
}

// --- TESTS ---
console.log(capitalizeWords("all you want is love     "));
// Output: "All You Want Is Love"

console.log(capitalizeWords("NOTHING iS bETter tHAn tHIS."));
// Output: "Nothing Is Better Than This."

console.log(capitalizeWords("hello   world"));
// Output: "Hello World" (No "undefined" crash!)