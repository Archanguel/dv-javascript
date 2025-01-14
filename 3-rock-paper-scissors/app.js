const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");
var playerCounter=0, computerCounter=0;

const resultElement = document.getElementById("result");
const counter = document.getElementById("counter");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", startGame));

function startGame(event) {
  // Obtener elección del jugador
  const button = event.currentTarget;
  const playerChoice = button.dataset.choice;

  // Obtener elección de la computadora
  const computerChoice = getComputerChoice();

  // Calcular ganador
  //const playerWins = isPlayerWinner(playerChoice, computerChoice);
  const winner = setWinner(playerChoice, computerChoice);

  // Mostrar resultado
  playerChoiceElement.setAttribute("src", `imgs/${playerChoice}.png`);
  computerChoiceElement.setAttribute("src", `imgs/${computerChoice}.png`);

  // const result = playerWins ? "GANASTE" : "PERDISTE";

  //   if (playerWins === true) {
  //     result.textContent = "GANASTE";
  //   } else if (!playerWins) {
  //     result.textContent = "PERDISTE";
  //   } else if (playerWins === "draw") {
  //     result.textContent = "EMPATASTE";
  //   }
  counter.textContent=playerCounter +"-"+ computerCounter;
  if(playerCounter == 3){
    counter.textContent="PLAYER WINS";
    playerCounter=0;
    computerCounter=0;
  }else if(computerCounter == 3){
    counter.textContent="COMPUTER WINS";
    playerCounter=0;
    computerCounter=0;
  }
  resultElement.textContent = winner;
}

const possibleChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  // Obtener un valor aleatorio
  const computerChoice = Math.floor(Math.random() * 3);

  // Retornar elección
  return possibleChoices[computerChoice];
}

// Antes: isPlayerWinner
function setWinner(playerChoice, computerChoice) {
  console.log("playerChoice", playerChoice);
  console.log("computerChoice", computerChoice);
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerCounter++;
    return "GANASTE";
  } else if (playerChoice === computerChoice) {
    return "EMPATASTE";
  } else {
    computerCounter++;
    return "PERDISTE";
  }
}
