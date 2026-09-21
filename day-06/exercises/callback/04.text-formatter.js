/*
    Exercise 4: The Text Formatter
    Write a function called formatText(text, callback).

    Inside the function, call the callback, passing text to it.

    Your task:

    Write the formatText function.
    Create a callback function called shout. It should take the text, 
    use .trim() and .toUpperCase() on it, and console.log it with an 
    exclamation mark at the end (e.g., "HELLO!").

    Call formatText("  hello world  ", shout).

    Goal: Practice using the string methods you already know (trim, toUpperCase) inside a callback function.

*/

function formatText(text, callback) {
    callback(text);
}

function shout(text) {
    let textTrimmed = text.trim();
    let textUpper = textTrimmed.toUpperCase();

    console.log(`${textUpper}!`);
}

formatText("  hello world  ", shout);