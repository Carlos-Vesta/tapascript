// /*
//     Let us play a number guessing game.
//     You will ask user for a number between 1 to 10. Once user will enter a number, 
//     you will tell user if the entered number is lower or higher. With this information, 
//     user will change the number and finally guess the right number.
//     You also need to show the number of attempts made by users to reach to this right guess.


//     STEPS TO FOLLOW TO BUILD THE GAME

//     - Define a min and max number
//     - Secret number is a random number between the min and max number
//     - Get the prompt from the user as a guess
//     - Create a variable to store the number of attempts
//     - Write the logic to check if the guess and secret number are same. If not, continue a loop
//     to ask again.
//     - Inside the loop check if guess is less than secret or greater than, accordingly tell if the
//     guess is low or high
//     - Give the option to play again.


//     ========================================================================================

//     Welcome to the Number Guessing Game
//     Try to guess a number between 1 and 10.
// */

function secretNumberGuessing() {

    alert(`Welcome to the Number Guessing Game.\nTry to guess a number between 1 and 10.`);


   
    let playAgain = "yes";

    // Declaration and initialization of max and min variables
    const min = 1;
    const max = 10;


    // 1. Setup a new round
    while (playAgain === "yes") {

        // 1. Setup a new round
        let secretNumber = Math.floor(Math.random() * (max - min + 1) + min);
        let userGuess = null; // Reset for the new round
        let attempts = 0; // Start at 0, we will increment after checking

        // console.log(secretNumber);
        // 2. The Game Loop
        while (true) {
             
            // Ask for input and explicitly cast to Number
            userGuess = Number(prompt(`Attempt ${attempts + 1}: Guess the secret number between ${min} and ${max}.`).trim());

            // 3. Guard Clause: Validate input
            if (isNaN(userGuess) || userGuess < min || userGuess > max) {
                alert(`Error: Enter a valid number between ${min} and ${max}.`);
                console.log(userGuess);
                continue;
            }

            // Increment attempt RIGHT AFTER they guess
            attempts++;


            // 4. Core Game Logic
            if (userGuess > secretNumber) {
                alert(`Too High! Try again.`);

            } else if (userGuess < secretNumber) {
                alert(`Too Low! Try again.`);

            } else {
                // WIN CONDITION
                alert(`Congrats! You guessed the number in ${attempts} attempt(s).`);

                while (true) {
                    // 5. Replay Logic
                    playAgain = prompt(`Do you want to play again? (Yes/No) or (Y/N)`).toLowerCase().trim();

                    if (playAgain !== "yes" && playAgain !== "y" && playAgain !== "no" && playAgain !== "n") {
                        alert(`Invalid Input: Type (Yes/No) or (Y/N).`);
                       
                    } else if (playAgain === "yes" || playAgain === "y") {
                        playAgain = "yes";
                        break;

                    } else if (playAgain === "no" || playAgain === "n") {
                        alert(`Goodbye! See you next time.`);
                        return;
                    }
                }
                break;
            }
        }
    }
}

secretNumberGuessing();