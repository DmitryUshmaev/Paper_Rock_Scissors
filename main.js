const computerChoice = document.querySelector("#computer-choice");
const userChoice = document.querySelector("#user-choice");
const result = document.querySelector("#result");
const possibleChoices = document.querySelectorAll("button");
let usrChoice;
let pcChoice;
let finalRes;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (event) => {
    usrChoice = event.target.innerText;

    userChoice.innerHTML = usrChoice;
    generateComputerChoice();
    getResult();
    console.log(result);
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    pcChoice = "Rock";
  } else if (randomNumber === 2) {
    pcChoice = "Paper";
  } else if (randomNumber === 3) {
    pcChoice = "Scissors";
  }

  computerChoice.innerText = pcChoice;
}

function getResult() {
  if (pcChoice === usrChoice) {
    finalRes = "Draw";
    console.log(finalRes);
  } else if (pcChoice === "Rock" && usrChoice === "Paper") {
    finalRes = "Win";
  } else if (pcChoice === "Rock" && usrChoice === "Scissors") {
    finalRes = "Loose";
  } else if (userChoice === "Paper" && pcChoice === "Scissors") {
    finalRes = "Loose";
  } else if (userChoice === "Scissors" && pcChoice === "Paper") {
    finalRes = "Win";
  } else if (userChoice === "Rock" && pcChoice === "Scissors") {
    finalRes = "Win";
  } else if (userChoice === "Rock" && pcChoice === "Paper") {
    finalRes = "Loose";
  }

  result.innerText = finalRes;
}
