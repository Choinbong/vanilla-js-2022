const maxnum = document.querySelector(".maxnum");
const userChoice = document.querySelector(".user-choice");
const result = document.querySelector(".result");
const outcome = document.querySelector(".outcome");
const casinoForm = document.querySelector(".casino-form")
const choiceForm = document.querySelector(".user-choice-form");

let maxlength = 0;

function setMaxnum(event) {
    event.preventDefault();
    maxlength = parseInt(maxnum.value);
    userChoice.setAttribute("max", maxlength);
}

function submitPlay(event) {
    event.preventDefault();
    paintResult();
}

function paintResult() {
    let randomNum = Math.floor(Math.random() * (maxlength + 1));
    result.innerText = `You chose: ${userChoice.value}, the machine chose: ${randomNum}.`;
    if (parseInt(userChoice.value) === parseInt(randomNum)) {
        outcome.innerText = `You won!`;
    } else {
        outcome.innerText = `You lost!`;
    }
}

casinoForm.addEventListener("submit", setMaxnum);
choiceForm.addEventListener("submit", submitPlay);

