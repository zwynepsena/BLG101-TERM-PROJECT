const firtsLetters = ["cards/letterZ.svg", "cards/letterS.svg", "cards/letterE.svg", "cards/letterN.svg", "cards/letterA.svg"];
let shuffledLetters = [];
let gameStarted = false;
let cardDisabledValue = false;
let score = Number;
let click = Number;

document.addEventListener("DOMContentLoaded", function() {
    start();
})

function cardDisabled() {
    if (cardDisabledValue == false) {
        for (let i = 0; i<5; i++) {
            var card = "card"+i;
            document.getElementById(card).disabled = true;
        }   
    }

    else {
        for (let i = 0; i<5; i++) {
            var card = "card"+i
            document.getElementById(card).disabled = false;
        }
    }
}

function shuffleCard(array) {
    let Array = array.slice();

    for (let i = Array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [Array[i], Array[j]] = [Array[j], Array[i]];
    }
    return Array;
}

function cards() {
    for (let i = 0; i<5; i++) {
        var image="image"+i;
        document.getElementById(image).src = shuffledLetters[i];
    }
    document.getElementById("restart").disabled = true;
}

function first() {
    cardDisabledValue = false;
    score = 0;
    click = 0 ;
    updateScoreDisplay();
    cardDisabled();
    
    for (let i = 0; i<5; i++) {
        var image="image"+i;
        document.getElementById(image).src = "cards/card.svg";
    }
}

function start() {
    first();
    shuffledLetters = shuffleCard(firtsLetters);
    cards();
    setTimeout(turnDownCards, 2000);
    cardDisabledValue = true;
    setTimeout(cardDisabled, 2000);
}

function turnDownCards() {
    document.getElementById("image0").src = "cards/card.svg";
    document.getElementById("image1").src = "cards/card.svg";
    document.getElementById("image2").src = "cards/card.svg";
    document.getElementById("image3").src = "cards/card.svg";
    document.getElementById("image4").src = "cards/card.svg";
    document.getElementById("restart").disabled = false;
}

function updateScoreDisplay() {
    document.getElementById("score-value").textContent = score;
}

function clickControl() {
    if (click == firtsLetters.length) {
        alert("CONGRATULATIONS!! 🎉\n Your Score: " + score);
        first();
    }
}

function clicking(index) {
    if (firtsLetters[click] == shuffledLetters[index]) {
        score += 20;
        click += 1;
        document.getElementById("image" + index).src = shuffledLetters[index];
        document.getElementById("card" + index).disabled = true;
        updateScoreDisplay();
        setTimeout(clickControl, 500);
    } else {
        alert("GAME OVER!! 😢 \n Your Score: " + score);
        document.getElementById("image" + index).src = shuffledLetters[index];
        document.getElementById("card" + index).disabled = true;
        setTimeout(first, 500);
    }
}
