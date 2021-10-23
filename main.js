function computerPlay (){
    let array = ['Rock', 'Paper', 'Scissors'];
    random = Math.floor(Math.random() * array.length);
    return (random, array[random]);
};
console.log(computerPlay());

function round(playerSelection, computerSelection){
    if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        console.log('You win!');
    }
};
const playerSelection = 'Rock';
const computerSelection = computerPlay();
console.log(round(playerSelection, computerSelection));

function game(){

};