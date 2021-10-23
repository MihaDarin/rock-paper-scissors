function computerPlay (){
    let array = ['Rock', 'Paper', 'Scissors'];
    random = Math.floor(Math.random() * array.length);
    return (random, array[random]);
};
console.log(computerPlay());

function round(playerSelection, computerSelection){
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors')||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')||
        (playerSelection == 'Paper' && computerSelection == 'Rock')){
        console.log('You win!');
    }else if((playerSelection == 'Paper' && computerSelection == 'Scissors')||
             (playerSelection == 'Scissors' && computerSelection == 'Rock')||
             (playerSelection == 'Rock' && computerSelection == 'Paper')){
        console.log('You lose!');
    }else{
        console.log('Nobody win');
    }
};
const playerSelection = prompt('Type your choose', '');
const computerSelection = computerPlay();
console.log(round(playerSelection, computerSelection));

function game(){
    for (let i=0; i<5; i++){
        round();
        console.log(round());
    }
};
console.log(game())