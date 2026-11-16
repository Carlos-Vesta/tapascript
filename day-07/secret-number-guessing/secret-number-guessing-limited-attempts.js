/**
 * 
    ### Exercise 2: Guess the Number (Limited Attempts)
    **Objective:** The computer generates a secret number between 1 and 50. The user has exactly 5 attempts to guess it. 
    After each wrong guess, the program must hint whether the secret number is "higher" or "lower". 
    If attempts reach 0, the user loses. After a win or loss, offer a replay.

    **Key Concepts:** State tracking (attempts remaining), nested loops (or compound conditions), input sanitization (`isNaN`).

    **Step-by-Step Logic:**
    1. Wrap the entire game in an outer `while` loop for the "replay" functionality.
    2. At the start of each round, generate the `secretNumber` and initialize `attempts = 5`.
    3. Create an inner `while (attempts > 0)` loop for the guessing phase.
    4. Prompt the user for a guess. **Guard Clause:** Check if the input is a valid number (hint: `isNaN()` 
    or checking if the parsed integer is `NaN`). If invalid, log an error and `continue` (do not deduct an attempt).
    5. Compare the guess to the `secretNumber`:
    - If equal: Log "You won!", and use `break` to exit the inner loop.
    - If lower: Log "The secret number is HIGHER."
    - If higher: Log "The secret number is LOWER."
    6. Decrement `attempts` by 1.
    7. If the inner loop finishes naturally (meaning `attempts` hit 0 without a `break`), log a loss message revealing the secret number.
    8. Outside the inner loop, prompt the user to replay and update the outer loop's condition.

 */

    function secretNumberGuessing() {

      alert(`Welcome to the Number Guessing Game.\nTry to guess a number between 1 and 50.`);

      const min = 1;
      const max = 50;
      let replay = "yes";


      // 1. Setup a new round
      while (replay === "yes") {
         // 1. Setup a new round
         let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
         let userGuess = null; // Reset for the new round
         let attempts = 5; // Start at 5, we will decrement after checking
         let attemptsCounter = 0;

         // 2. The Game Loop
         while (attempts > 0) {
               
               // Ask for input and explicitly cast to Number
               userGuess = Number(prompt(`Attempts left ${attempts}: Guess the secret number between ${min} and ${max}.`).trim());

               // 3. Guard Clause: Validate input
               if (isNaN(userGuess) || userGuess < min || userGuess > max) {
                  alert(`Error: Enter a valid number between ${min} and ${max}.`);
                  console.log(userGuess);
                  continue;
               }

               
               attempts--; // Decrement attempt RIGHT AFTER they guess
               attemptsCounter++; // Increment counter


               // 4. Core Game Logic
               if (userGuess > secretNumber) {
                  alert(`Too High! The secret number is LOWER. Try again.`);
                  continue;

               } else if (userGuess < secretNumber) {
                  alert(`Too Low! The secret number is HIGHER. Try again.`);
                  continue;

               } else {
                  // WIN CONDITION
                  alert(`Congrats! YOU WIN THE GAME. 🥳🏆🏁🥇\nYou guessed the number in ${attemptsCounter} attempt(s).`);
                  break;
               }
              
         }

         if (attempts < 1 && userGuess !== secretNumber) {
         alert(`YOU LOST THE GAME. 😤🤯\nYou hit the maximum attempts number.\nThe secret number is ${secretNumber}.`);
         } 

         while (true) {
            // 5. Replay Logic
            replay = prompt(`Do you want to play again? (Yes/No) or (Y/N)`).toLowerCase().trim();

            if (replay !== "yes" && replay !== "y" && replay !== "no" && replay !== "n") {
                  alert(`Invalid Input: Type (Yes/No) or (Y/N).`);
                        
            } else if (replay === "yes" || replay === "y") {
                  replay = "yes";
                  break;

            } else if (replay === "no" || replay === "n") {
                  alert(`Goodbye! See you next time. 😞`);
                  return;
            }
         }

      } // while (replay === "yes") condition closing


   }
   secretNumberGuessing();