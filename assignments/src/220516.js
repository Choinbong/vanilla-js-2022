const maxNumberInput = document.querySelector("#max-num input");
const chosenNumberInput = document.querySelector("#chosen-num input")
const maxNumberForm = document.querySelector("#max-num");
const chosenNumberForm = document.querySelector("#chosen-num");
const chosenNumberDiv = document.querySelector(".chosen-number");
const resultDiv = document.querySelector(".result");


function submitMaxNumber(event) {
    event.preventDefault();
    const max = maxNumberInput.value;
    localStorage.setItem("max", max);
    maxNumberInput.setAttribute("value", max);
    chosenNumberInput.setAttribute("max", max);
}


function submitChosenNumber(event) {
    event.preventDefault();
    const number = chosenNumberInput.value;
    localStorage.setItem("number", number);
    paintResult();
}

function paintResult() {

    const random = Math.floor(Math.random() * parseInt(localStorage.getItem("max")));
    const number = localStorage.getItem("number");
    chosenNumberDiv.innerText = `You chose: ${number}, the machine chose: ${random}`;
    if (random === parseInt(number)) {
        resultDiv.innerText = `You won!`;
    } else {
        resultDiv.innerText = `You lost!`;
    }

}


maxNumberForm.addEventListener("submit", submitMaxNumber);
chosenNumberForm.addEventListener("submit", submitChosenNumber);