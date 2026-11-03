# Day 07 - 40 Days of JavaScript

## **🎯 Goal of This Lesson**

- ✅ Build the Project
- ✅ Give an Assignment Project to Build


# Tasks
Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Change the RPS (Rock, Paper, Scissors) Project
Change the if-else to switch-case as asked in the video(at 15:42).

## 2. Build the Secret Number Guessing Game
Create the project as explained in the video.

* Let us play a number guessing game.
You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number.
You also need to show the number of attempts made by users to reach to this right guess.



Absolutely. Adapting to international standards—especially for the European tech market—means prioritizing **Clean Code**, **Readability**, **Maintainability**, and **Edge-Case Handling**. In professional teams, code is read far more often than it is written, so clarity is your most valuable asset.

Here are the 5 exercises, translated and refined to reflect international best practices. **No answers are provided**, only the architectural blueprint and logical steps to build them yourself.

---

### Exercise 1: The "Even or Odd" Game
**Objective:** The user chooses "even" or "odd". The computer generates a random number from 1 to 10. The program adds the user's chosen number (you can prompt the user for a number, or fix it to `5` for simplicity) to the computer's number and declares the winner based on the sum. The game loops until the user chooses to quit.

**Key Concepts:** Input validation (Guard Clauses), modulo operator (`%`), `while` loops, state management.

**Step-by-Step Logic:**
1. Create a `while` loop controlled by a variable like `keepPlaying = true`.
2. Inside the loop, prompt the user for their choice ("even" or "odd") and immediately sanitize it (e.g., `.toLowerCase().trim()`).
3. **Guard Clause:** If the input is strictly not "even" and not "odd", log an error and use `continue` to restart the loop immediately. Do not let the rest of the code execute.
4. Generate the computer's random number (1 to 10).
5. Define the user's number (via prompt or a fixed value).
6. Calculate the `sum`. Use the modulo operator (`sum % 2`). If the result is `0`, the sum is even; otherwise, it is odd.
7. Compare the mathematical result with the user's string choice to determine the winner.
8. At the end of the loop, prompt the user to play again and update the `keepPlaying` variable accordingly.

---

### Exercise 2: Guess the Number (Limited Attempts)
**Objective:** The computer generates a secret number between 1 and 50. The user has exactly 5 attempts to guess it. After each wrong guess, the program must hint whether the secret number is "higher" or "lower". If attempts reach 0, the user loses. After a win or loss, offer a replay.

**Key Concepts:** State tracking (attempts remaining), nested loops (or compound conditions), input sanitization (`isNaN`).

**Step-by-Step Logic:**
1. Wrap the entire game in an outer `while` loop for the "replay" functionality.
2. At the start of each round, generate the `secretNumber` and initialize `attempts = 5`.
3. Create an inner `while (attempts > 0)` loop for the guessing phase.
4. Prompt the user for a guess. **Guard Clause:** Check if the input is a valid number (hint: `isNaN()` or checking if the parsed integer is `NaN`). If invalid, log an error and `continue` (do not deduct an attempt).
5. Compare the guess to the `secretNumber`:
   - If equal: Log "You won!", and use `break` to exit the inner loop.
   - If lower: Log "The secret number is HIGHER."
   - If higher: Log "The secret number is LOWER."
6. Decrement `attempts` by 1.
7. If the inner loop finishes naturally (meaning `attempts` hit 0 without a `break`), log a loss message revealing the secret number.
8. Outside the inner loop, prompt the user to replay and update the outer loop's condition.

---

### Exercise 3: The Simple ATM Simulator
**Objective:** Simulate a bank menu. The user starts with a balance of €1000. The program displays a menu repeatedly until the user chooses "Exit". Options: 1. Check Balance, 2. Deposit, 3. Withdraw.

**Key Concepts:** State persistence (variables declared *outside* the loop), business logic validation, `switch` statements or clean `if/else` chains.

**Step-by-Step Logic:**
1. Declare `let balance = 1000;` **outside** the main loop. (Ask yourself: *Why outside?* Because if it's inside, it resets to 1000 on every iteration).
2. Create a `while` loop controlled by a boolean flag like `isMenuActive = true`.
3. Display the menu options and prompt for the user's choice.
4. Use a `switch` statement (or `if/else if`) to handle the choice:
   - **Case 1:** Simply log the current `balance`.
   - **Case 2:** Prompt for a deposit amount. **Guard Clause:** Is the amount > 0? If yes, `balance += amount`. If no, log an error.
   - **Case 3:** Prompt for a withdrawal amount. **Double Guard Clause:** Is the amount > 0? AND is the amount `<= balance`? If both are true, `balance -= amount`. If not, log "Insufficient funds or invalid amount."
   - **Case 4:** Set `isMenuActive = false` to gracefully exit the loop.
   - **Default:** Log "Invalid option, please try again."

---

### Exercise 4: Simplified Hangman (Single Word)
**Objective:** The program has a hardcoded secret word (e.g., `"javascript"`). The user guesses letter by letter. The program displays the current progress (e.g., `_ _ v _ _ _ _ _ _ t`). The game ends when the user reveals all letters or makes 6 incorrect guesses.

**Key Concepts:** String/array manipulation, the accumulator pattern, multi-condition loop tracking.

**Step-by-Step Logic:**
1. Define `const secretWord = "javascript";`, `let maxErrors = 6;`, and `let currentErrors = 0;`.
2. Create a way to track the displayed word. An array of underscores matching the length of `secretWord` is easiest to manipulate (e.g., `['_', '_', ...]`).
3. Create a `while` loop that runs as long as `currentErrors < maxErrors` **AND** the displayed word still contains `"_"`.
4. Prompt the user for a single letter. **Guard Clause:** Is the input exactly 1 character? Is it a letter (a-z)? If not, log an error and `continue`.
5. Check if `secretWord.includes(letter)`.
6. **If it includes the letter:** You must update the displayed word. (Hint: Use a `for` loop to iterate through `secretWord`. If `secretWord[i] === letter`, update your displayed array at index `i` to be that letter).
7. **If it does NOT include the letter:** Increment `currentErrors++` and inform the user.
8. When the loop exits, use an `if` statement to check the win/loss condition: Did `currentErrors` reach 6? Or did the user successfully remove all `"_"`?

---

### Exercise 5: Rock, Paper, Scissors "Best of 3" Tournament
**Objective:** Take the exact logic from your previous Rock, Paper, Scissors game, but remove the manual "play again?" prompt. Instead, the game must automatically continue round after round until either the User OR the Computer reaches 3 total wins.

**Key Concepts:** Compound `while` conditions, multiple state trackers, DRY (Don't Repeat Yourself) principle.

**Step-by-Step Logic:**
1. Before the loop, initialize two state variables: `let userWins = 0;` and `let computerWins = 0;`.
2. The `while` loop condition should be compound: `while (userWins < 3 && computerWins < 3)`. (Translation: *Keep playing as long as neither player has reached 3 wins*).
3. Inside the loop, place your existing logic: prompt user, validate input (Guard Clause!), generate computer choice.
4. Determine the round winner. Instead of just logging the result, update the state:
   - If user wins: `userWins++` and log the updated scoreboard.
   - If computer wins: `computerWins++` and log the updated scoreboard.
   - If it's a tie: Log "It's a tie! No points awarded." (Do not increment either score).
5. Once the loop condition becomes false (someone hit 3 wins), the loop ends naturally.
6. **Outside the loop**, write a final `if/else` to check who reached 3 and declare the ultimate tournament champion.

---

### 💡 Professional Coding Standards Checklist (European Tech Market)
As you build these, keep this checklist in mind. This is what senior developers look for in code reviews:
1. **Naming Conventions:** Use `camelCase` for variables and functions (`userWins`, `checkBalance`). Be descriptive. `let x` is forbidden; `let currentUserBalance` is professional.
2. **Guard Clauses First:** Always validate bad input at the very top of a block and `return` or `continue` early. This prevents "nested hell" (deeply indented code).
3. **Single Responsibility:** A function or block of code should do *one* thing. If your `while` loop is 100 lines long, it's doing too much.
4. **No Magic Numbers:** Instead of writing `while (errors < 6)`, define `const MAX_ERRORS = 6;` at the top. It makes the code self-documenting.
5. **Sanitize Inputs:** Always use `.trim()` and `.toLowerCase()` on user prompts before evaluating them. Users *will* add accidental spaces or use caps.

Pick **one** of these exercises to start. Write the code, test your edge cases, and paste it here. We will review it with the exact same professional rigor as a real code review. You've got this!