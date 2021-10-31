const rock = document.getElementById('rock');
rock.addEventListener('click', game);
const paper = document.getElementById('paper');
paper.addEventListener('click', game);
const scissors = document.getElementById('scissors');
scissors.addEventListener('click', game);
let win = document.getElementById('win');
let lose = document.getElementById('lose');
let playerScore = 0;
let computerScore = 0;
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
    console.log (playerScore);
    console.log (computerScore);
    if(
        (playerSelection.target.id === 'rock' && computerSelection === 'Scissors')||
        (playerSelection.target.id === 'paper' && computerSelection === 'Rock')||
        (playerSelection.target.id === 'scissors' && computerSelection === 'Paper')){
        console.log('You win!');
        win.innerHTML++;
        ++playerScore;
    }else if(
        (playerSelection.target.id === 'rock' && computerSelection === 'Paper')||
        (playerSelection.target.id === 'paper' && computerSelection === 'Scissors')||
        (playerSelection.target.id === 'scissors' && computerSelection === 'Rock')){
        console.log('You lose!');
        lose.innerHTML++;
        ++computerScore;
    }else{
        console.log('Nobody');
    }
    
    if(playerScore == 5){
        alert ('you win');
    }else if(computerScore == 5){
        alert ('computer win');
    }
    
};
