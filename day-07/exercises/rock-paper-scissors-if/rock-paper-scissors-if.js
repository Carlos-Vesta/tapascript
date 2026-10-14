function rockPaperScissors() {
    let playAgain = "y"; // Start the game

    // The WHILE loop keeps the game running without stacking the Call Stack
    while (playAgain === "y" || playAgain === "yes") {
        
        const userChoice = prompt("Choose between Rock, Paper, or Scissors:").toLowerCase().trim();
        
        // 1. GUARD CLAUSE: Validate input FIRST
        if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
            alert("Invalid input! Please type exactly: rock, paper, or scissors.");
            continue; // Skip the rest of this loop round and ask again
        }

        // 2. Computer Choice (Cleaned up syntax)
        const randomNumber = Math.floor(Math.random() * 3) + 1; // Generates 1, 2, or 3
        let computerChoice;
        
        if (randomNumber === 1) {
            computerChoice = "rock";
        } else if (randomNumber === 2) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }

        // 3. Determine Winner
        if (userChoice === computerChoice) {
            alert(`Draw! You both chose ${userChoice}.`);
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") || 
            (userChoice === "scissors" && computerChoice === "paper") ||
            (userChoice === "paper" && computerChoice === "rock")
        ) { 
            alert(`You Win! 🎉\nYou: ${userChoice} | Computer: ${computerChoice}`); 
        } else {
            // If it's not a draw, and you didn't win, the computer MUST have won.
            // No need for a massive third else-if!
            alert(`Computer Wins! 💻\nYou: ${userChoice} | Computer: ${computerChoice}`);
        }

        // 4. Play Again?
        playAgain = prompt("Do you want to play again? (y/n)").toLowerCase().trim();

         while (
            (playAgain !== "n" && playAgain !== "no") &&
            (playAgain !== "y" && playAgain !== "yes")
        ) {

            alert(`I didn't understand that. Please type exactly 'y/yes' to play again or 'n/no' to quit.`);
            playAgain = prompt("Do you want to play again? (y/n)").toLowerCase().trim();
        }
    }

    // 5. Goodbye message (outside the loop)
    alert("Goodbye! See you later! 👋");
}

// Start the game
rockPaperScissors();