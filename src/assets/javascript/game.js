
// Your JavaScript goes here!
function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerOneSelection, playerTwoSelection = computerPlay()) {
  if (playerOneSelection === playerTwoSelection) {
    return 0;
  } else if (playerOneSelection === "rock") {
    if (playerTwoSelection === "paper") {
      return -1;
    } else {
      return 1;
    }
  } else if (playerOneSelection === "paper") {
    if (playerTwoSelection === "scissors") {
      return -1;
    } else {
      return 1;
    }
  } else if (playerOneSelection === "scissors") {
    if (playerTwoSelection === "rock") {
      return -1;
    } else {
      return 1;
    }
  }
}
function game() {
  for (let i = 0; i < 5; i++) {
    let x = prompt("Rock, paper, or scissors?");
    console.log(playRound(x, computerPlay()))
  }

}

export default playRound
