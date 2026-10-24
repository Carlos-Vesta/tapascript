/**
    ==== RULES ====

    - Rock beats scissorss
    - Paper beats Rock
    - scissorss beats Paper

    * Condition Stament: Swith Case

    1. Ask player to choose rock, paper or scissorss
    2. Make computer choose randomly
    3. Compare player choose with computer choose
    4. Show the winner
    5. Ask if player want to play again

*/



function rockPaperScissors() {

    let playAgain = 'yes';
    
    while (playAgain === 'yes' || playAgain === 'y') {

        let player = prompt('Choose Rock, Paper or Scissors').toLowerCase().trim();

        while (player !== 'rock' && player !== 'paper' && player !== 'scissors') {
            alert('Invalid input. Choose between Rock, Paper or Scissors.');
            player = prompt('Choose Rock, Paper or scissors').toLowerCase().trim();
        }


        const computer = Math.floor(Math.random() * 3) + 1;
        let computerChoose;
        
        switch(computer) {
            case 1:
                computerChoose = 'rock';
                break;
            case 2:
                computerChoose = 'paper';
                break;
            case 3:
                computerChoose = 'scissors'
                break;
            default:
        }


        switch(true) {
            case player === 'rock' && computerChoose === 'scissors' ||
                player === 'paper' && computerChoose === 'rock' ||
                player === 'scissors' && computerChoose === 'paper':
                alert(`Player Choise: ${player}\nComputer Choise: ${computerChoose}\n==============\nPlayer Wins!`);
                break;
                
            case player === 'rock' && computerChoose === 'rock' ||
                player === 'paper' && computerChoose === 'paper' ||
                player === 'scissors' && computerChoose === 'scissors':
                alert(`Player Choise: ${player}\nComputer Choise: ${computerChoose}\n==============\nDraw!`);
                break;
            default:
                alert(`Player Choise: ${player}\nComputer Choise: ${computerChoose}\n==============\nComputer Wins!`);
        }

        playAgain = prompt('Do you want to play again? (Yes/No) or (Y/N)').toLowerCase().trim();

        while (playAgain !== 'yes' && playAgain !== 'y' && playAgain !== 'no' && playAgain !== 'n') {
            alert(`I don't understand your choise.\nPlease type (Yes/No) or (Y/N).`);
            playAgain = prompt('Do you want to play again? (Yes/No) or (Y/N)').toLowerCase().trim();
        }
    }

    alert('Goodbye, see you next time!');
}

rockPaperScissors();