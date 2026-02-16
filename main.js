let errors = 0;
let cardList = [
    "darkness",
    "double",
    "fairy",
    "fighting",
    "fire",
    "grass",
    "lightning",
    "metal",
    "psychic",
    "water"
]

let cardSet;
let board = [];

window.onload = function() {
    shuffleCards();
    startGame();
}

function shuffleCards(){
    cardSet = cardList.concat(cardList); // Two of each card
    console.log(cardSet);

    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length) // Get random index
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
}

function startGame(){
    
}