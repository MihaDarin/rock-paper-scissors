function computerPlay (){
    let array = ['Rock', 'Paper', 'Scissors'];
    random = Math.floor(Math.random() * array.length);
    return (random, array[random]);
};


function round(playerSelection, computerSelection){
 playerSelection = prompt('Enter your choose', '');
 computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    if(
        (playerSelection == 'Rock' && computerSelection === 'Scissors')||
        (playerSelection == 'Paper' && computerSelection === 'Rock')||
        (playerSelection == 'Scissors' && computerSelection === 'Paper')){
        console.log('You win!');
    }else if(
        (playerSelection == 'Rock' && computerSelection === 'Paper')||
        (playerSelection == 'Paper' && computerSelection === 'Scissors')||
        (playerSelection == 'Scissors' && computerSelection === 'Rock')){
        console.log('You Lose!');
    }else{
        console.log('Nobody');
    }
};
round();

function game(){
    let i = 1;
    do{
        round();
        ++i;
    }while (i < 5)
}
game();