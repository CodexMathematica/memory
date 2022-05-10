const board = document.querySelector('#gameBoard');
const choosenTimeToCompleteGame = 60;
const displayResult = document.querySelector('#result');
const displayScore = document.querySelector('#score');
const endgameContainer = document.querySelector('#endgame-container');
const progressBar = document.querySelector('#progress-bar');
const restart = document.querySelector('#restart');
const start = document.querySelector('#start');
const timeToComplete = document.querySelector('#time-to-complete');
let timer = null;
let choosenCards = [];
let score = 0;
let disableGame = false;
let chrono;

function startTimer(time){
    chrono = time;
    timer = setInterval(() => {
        chrono--;
        progressBar.style.width = (chrono*100)/time + '%';
        if(chrono === 0){
            clearInterval(timer);
            endgame(false);
        }
    }, 1000);
};

function createBoard(){
    let shuffledCards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,32,24,25,26,27,28,29];
    while(shuffledCards.length > 14){ 
        shuffledCards.splice(Math.floor( Math.random()*shuffledCards.length ), 1);
    }
    shuffledCards = shuffledCards.concat(shuffledCards);
    shuffledCards.sort(()=> 0.5 - Math.random());
    for(let i = 0; i < 28 ; i++){
        let card = document.createElement('img');
        card.setAttribute('src', 'assets/images/back.png');
        card.setAttribute('class', 'card');
        card.setAttribute('data-id', i);
        card.setAttribute('data-value', shuffledCards[0]);
        shuffledCards.shift();
        board.appendChild(card);
        card.addEventListener('click', flipCard);
    }
}

function checkIfCardsMatches(){
    card1 = document.querySelector(`[data-id='${choosenCards[0]}']`);
    card2 = document.querySelector(`[data-id='${choosenCards[2]}']`);
    card1.classList.remove('shake');
    card2.classList.remove('shake');
    if(choosenCards[1] !== choosenCards[3]){
        card1.setAttribute('src', 'assets/images/back.png');
        card2.setAttribute('src', 'assets/images/back.png');
    }else{
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);
        score++;
    }
    choosenCards = [];

    if (score === 14){ 
        endgame(true);
    }
}

function flipCard(){
    let clickedCardId = this.getAttribute('data-id');
    if(clickedCardId !== choosenCards[0] && disableGame === false){
        this.classList.add('shake');
        let clickedCardValue = this.getAttribute('data-value');
        choosenCards.push(clickedCardId);
        choosenCards.push(clickedCardValue);
        this.setAttribute('src', 'assets/images/'+clickedCardValue+'.png');
        if(choosenCards.length === 4){
            disableGame = true;
            setTimeout(() => {
                checkIfCardsMatches();
                disableGame = false;
            }, 500);
 
        }
    }
}

function endgame(win){
    let msg = 'Partie avortée';
    if (win=== true){
        msg = 'Victoire !!!';
    }else{
        msg = 'Défaite !!!';
    }
    endgameContainer.classList.remove('hide');
    timeToComplete.setAttribute('value', choosenTimeToCompleteGame - chrono);
    displayScore.setAttribute('value', score);
    displayResult.innerText = msg;
}

function reset(){
    score = 0;
    clearInterval(timer);
    board.innerHTML='';
    createBoard();
    startTimer(choosenTimeToCompleteGame);
}

start.addEventListener('click', () => {
    reset();
});

restart.addEventListener('click', () => {
    endgameContainer.classList.add('hide');
    reset();

});
