const rock = document.getElementById('rock');
rock.addEventListener('click', round);
const paper = document.getElementById('paper');
paper.addEventListener('click', round);
const scissors = document.getElementById('scissors');
scissors.addEventListener('click', round);


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


function round(playerSelection, computerSelection){

    computerSelection = computerPlay();
    console.log(playerSelection.target.id);
    console.log(computerSelection);
    if(
        (playerSelection.target.id === 'rock' && computerSelection === 'Scissors')||
        (playerSelection.target.id === 'paper' && computerSelection === 'Rock')||
        (playerSelection.target.id === 'scissors' && computerSelection === 'Paper')){
        console.log('You win!');
        
        return('You win!');
    }else if(
        (playerSelection.target.id === 'rock' && computerSelection === 'Paper')||
        (playerSelection.target.id === 'paper' && computerSelection === 'Scissors')||
        (playerSelection.target.id === 'scissors' && computerSelection === 'Rock')){
        console.log('You Lose!');
        return('You Lose!');
    }else{
        console.log('Nobody');
        return('Nobody');
    }
};
console.log(round());

function game(){
    let i = 1;
    do{
        round();
        ++i;
    }while (i < 5)
}
game();