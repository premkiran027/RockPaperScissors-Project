let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0
}
scoreUpdate();

function compPick(){
    const randomNum = Math.random();
    let move = '';

    if(randomNum >= 0 && randomNum < 1/3){
        move = 'rock';
    }else if(randomNum >= 1/3 && randomNum < 2/3){
        move = 'paper';
    }else if(randomNum >= 2/3 && randomNum < 1){
        move = 'scissors';
    }
    return move;
}
function playGame(playerMove){
    compMove = compPick();
    let result = '';

    if(playerMove === 'rock'){
        if(compMove === 'rock'){
            result = 'You Tie';
        }else if(compMove === 'paper'){
            result = 'You Lose';
        }else if(compMove === 'scissors'){
            result = 'You Win';
        }
    }else if(playerMove === 'paper'){
        if(compMove === 'rock'){
            result = 'You Win';
        }else if(compMove === 'paper'){
            result = 'You Tie';
        }else if(compMove === 'scissors'){
            result = 'You Lose';
        }
    }else if(playerMove === 'scissors'){
        if(compMove === 'rock'){
            result = 'You Lose';
        }else if(compMove === 'paper'){
            result = 'You Win';
        }else if(compMove === 'scissors'){
            result = 'You Tie';
        }
    }

    if(result === 'You Win'){
        score.win += 1;
    }else if(result === 'You Lose'){
        score.lose += 1;
    }else if(result === 'You Tie'){
        score.tie += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    scoreUpdate();
    document.querySelector('.pyrresult').innerHTML = result;
    document.querySelector('.pyrmove').innerHTML = `You chose <img class="move-icon" src="img/${playerMove}-emoji.png" alt="${playerMove}"> Computer chose <img class="move-icon" src="img/${compMove}-emoji.png" alt="${compMove}">`;
}
function scoreUpdate(){
    document.querySelector('.scrUp').innerHTML = `Wins: [${score.win}]. Losses: [${score.lose}]. Ties: [${score.tie}]`;
} 
