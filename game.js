const choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;


function append_text(text) {
  var main_div = document.getElementById("main_div");
  var content = document.createTextNode(text);
  main_div.appendChild(content);
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  append_text(`You chose: ${playerSelection}, Computer chose: ${computerSelection}`);

  if (playerSelection === computerSelection) {
    append_text('Tie!');
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    append_text(`You win, ${playerSelection} beats ${computerSelection}`);
    userScore++;
  } else {
    append_text(`Computer wins, ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  }
}

function game() {
  append_text('Rock, paper, scissors! Best of 5 wins!');

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(`Round ${i + 1}: Choose rock, paper, or scissors:`);
    playerSelection.toLowerCase();
    if (playerSelection === 'scissor') {
      playerSelection += "s";
    }
    playRound(playerSelection);
  }

  append_text(`Final Score: You ${userScore}, Computer ${computerScore}`);
  if (userScore > computerScore) {
    append_text('You win the game!');
  } else if (userScore < computerScore) {
    append_text('Computer wins the game!');
  } else {
    append_text('The game is a tie!');
  }
}

// game();