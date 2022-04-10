// --------------------- Weapons -------------------------//

const rock = document.getElementById("rock");
rock.addEventListener("click", game);
const paper = document.getElementById("paper");
paper.addEventListener("click", game);
const scissors = document.getElementById("scissors");
scissors.addEventListener("click", game);

// --------------------- Scores -------------------------//

let PlayerScore = document.getElementById("#PlayerScore");
let ComputerScore = document.getElementById("#ComputerScore");
const score = document.querySelector("#score");
const whoWins = document.querySelector("#whoWins");

let playerPoint = 0;
let computerPoint = 0;

// --------------------- Player or Computer move -------------------------//

function playerSelection(event) {
  const target = event.target;
  if (target.tagName != "BUTTON") return;
  return target.id;
}

function computerPlay() {
  let array = ["Rock", "Paper", "Scissors"];
  random = Math.floor(Math.random() * array.length);
  return random, array[random];
}

// --------------------- GAME LOGIC-------------------------//

function game(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  if (
    (playerSelection.target.id === "rock" && computerSelection === "Scissors") ||
    (playerSelection.target.id === "paper" && computerSelection === "Rock") ||
    (playerSelection.target.id === "scissors" && computerSelection === "Paper")
  ) {
    ++playerPoint;
    whoWins.innerHTML = "Player wins";
    whoWins.className = "win";
  } else if (
    (playerSelection.target.id === "rock" && computerSelection === "Paper") ||
    (playerSelection.target.id === "paper" && computerSelection === "Scissors") ||
    (playerSelection.target.id === "scissors" && computerSelection === "Rock")
  ) {
    ++computerPoint;
    whoWins.innerHTML = "Computer wins";
    whoWins.className = "lose";
  } else {
    whoWins.innerHTML = "It's a tie";
    whoWins.className = "tie";
  }

  score.innerHTML = `<span class="sides">Player: ${playerPoint}</span>
                     <span class="sides">Computer: ${computerPoint}</span>`;

  // --------------------- WINNER RESULT-------------------------//

  if (playerPoint == 5) {
    whoWins.innerHTML = "Congratulations! You win!";
    whoWins.className = "win";
    playerPoint = 0;
    computerPoint = 0;
  } else if (computerPoint == 5) {
    whoWins.innerHTML = "End Game! You lose!";
    whoWins.className = "lose";
    playerPoint = 0;
    computerPoint = 0;
  }
}
