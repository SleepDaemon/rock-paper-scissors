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