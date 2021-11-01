const rock = document.getElementById('rock');
rock.addEventListener('click', game);
const paper = document.getElementById('paper');
paper.addEventListener('click', game);
const scissors = document.getElementById('scissors');
scissors.addEventListener('click', game);
let PlayerScore = document.getElementById('#PlayerScore');
let ComputerScore = document.getElementById('#ComputerScore');
const score = document.querySelector('#score');
const whoWins = document.querySelector('#whoWins');

let playerPoint = 0;
let computerPoint = 0;


function playerSelection(event){
    const target = event.target;
        if (target.tagName != 'BUTTON') return;
      return(target.id)
};

function computerPlay (){
    let array = ['Rock', 'Paper', 'Scissors'];
    random = Math.floor(Math.random() * array.length);
    return (random, array[random]);
};

function game(playerSelection, computerSelection){
    computerSelection = computerPlay();
    console.log(playerSelection.target.id);
    console.log(computerSelection);   
    if(
        (playerSelection.target.id === 'rock' && computerSelection === 'Scissors')||
        (playerSelection.target.id === 'paper' && computerSelection === 'Rock')||
        (playerSelection.target.id === 'scissors' && computerSelection === 'Paper')){
        console.log('You win!');
        ++playerPoint;
        whoWins.innerHTML = "Player wins";
        whoWins.classList.add("win");
    }else if(
        (playerSelection.target.id === 'rock' && computerSelection === 'Paper')||
        (playerSelection.target.id === 'paper' && computerSelection === 'Scissors')||
        (playerSelection.target.id === 'scissors' && computerSelection === 'Rock')){
        console.log('You lose!');
        ++computerPoint;
        whoWins.innerHTML = "Computer wins";
        whoWins.classList.add("lose");
    }else{
        console.log('Tie');
        whoWins.innerHTML = "It's a tie";
        whoWins.classList.add("tie");
    }

    score.innerHTML = `<span class="sides">Player: ${playerPoint}</span>
                   <span class="sides">Computer: ${computerPoint}</span>`;

    if(playerPoint == 5){
        alert ('you win');
    }else if(computerPoint == 5){
        alert ('computer win');
    }
    console.log (playerPoint);
    console.log (computerPoint);
};