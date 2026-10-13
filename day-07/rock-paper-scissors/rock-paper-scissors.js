/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. 
 * Once Human will select Rock, Paper, or Scissors and in the next turn the computer 
 * will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// ASSUMPTIONS
// 1. We have to prompty the user to get their inputs;
// 2. The computer's selection will be random;
// 3. We have to compare user and computer's choice;
// 4. We need to announce the winner;
// 5. After the winner announcement, we may want to ask the user to play again or quit from the game.

function rockPaperScissors() {
   
    const userChoice = prompt("Choose between Rock, Paper and Scissors.").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerChoice;

    // 
    if (randomNumber === 1) {
        computerChoice = "rock";

    } else if (randomNumber === 2) {
        computerChoice = "paper";

    } else {
        computerChoice = "scissors"
    }

    if (
        (userChoice === "rock" && computerChoice === "scissors") || 
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) { 
        alert(`User Choice: ${userChoice} || Computer Choice: ${computerChoice} - User Wins!`); 

    } else if (
        (userChoice === "rock" && computerChoice === "rock") || 
        (userChoice === "paper" && computerChoice === "paper") ||
        (userChoice === "scissors" && computerChoice === "scissors")
    ) {
        alert(`User Choice: ${userChoice} || Computer Choice: ${computerChoice} - Draw!`);

    } else if (
        (computerChoice === "rock" && userChoice === "scissors") || 
        (computerChoice === "scissors" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "rock")
    ) {
        alert(`User Choice: ${userChoice} || Computer Choice: ${computerChoice} - Computer Wins!`);

    } else if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        alert(`User Choice: ${userChoice} || Please enter a valid option: Rock, Paper, or Scissors.`);
    }

    let playAgain = prompt(`Do you want play again? y/n`).toLowerCase();
    if (playAgain === "y") {
        rockPaperScissors();

    } else {
        alert(`Godbye. See you latter!`)
    }
}

rockPaperScissors();