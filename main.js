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
let rows = 4;
let columns = 5;

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
    //Arrang the board 4x5
    for (let r = 0; r < rows; r ++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg)

            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = "images/" + cardImg + ".jpg";
            card.classList.add("card");
            document.getElementById("board").append(card);
        }
        board.push(row);
    }
    console.log(board);
}