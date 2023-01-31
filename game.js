const choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  console.log(`You chose: ${playerSelection}, Computer chose: ${computerSelection}`);

  if (playerSelection === computerSelection) {
    console.log('Tie!');
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log(`You win, ${playerSelection} beats ${computerSelection}`);
    userScore++;
  } else {
    console.log(`Computer wins, ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  }
}

function game() {
  console.log('Rock, paper, scissors! Best of 5 wins!');

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(`Round ${i + 1}: Choose rock, paper, or scissors:`);
    playerSelection.toLowerCase();
    if (playerSelection === 'scissor') {
      playerSelection += "s";
    }
    playRound(playerSelection);
  }

  console.log(`Final Score: You ${userScore}, Computer ${computerScore}`);
  if (userScore > computerScore) {
    console.log('You win the game!');
  } else if (userScore < computerScore) {
    console.log('Computer wins the game!');
  } else {
    console.log('The game is a tie!');
  }
}

game();