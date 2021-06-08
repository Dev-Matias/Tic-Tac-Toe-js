import UI from "./helpUI.js";
const btns = Array.from(document.getElementsByClassName("btn"));
const parent = document.getElementById("cell");
//save position payer 'x' and player 'o' in array
var movementX = 0;
var movementO = 0;
const ui = new UI();
// Create Message
const msgTurn = ui.createMsg("Turn Player: X");
const msgGame = ui.createMsg("Tic Tac Toe!", "50");
const msgPlayAgain = ui.createMsg("", "40", "none");
//Player mark x/o
const playerX = ui.createMsg("X").textContent;
const playerO = ui.createMsg("O").textContent;
//Initial player is 'O'
var playerMove = playerO;
//show message
let msg = parent.parentNode.firstElementChild;
msg.appendChild(msgGame);
msg.appendChild(msgTurn);
msg.appendChild(msgPlayAgain);

//check wins if the sum is 15 !!magic square!!
const chekWins = () => {
  if (movementX === 15) {
    msgTurn.style.color = "#6c5ce7";
    msgTurn.innerText = `Wins Player X!!`;
    parent.style.display = "none";
    reloadGame();
  } else if (movementO === 15) {
    msgTurn.style.color = "#6c5ce7";
    msgTurn.innerText = `Wins Player O!!`;
    parent.style.display = "none";
    reloadGame();
  }
};
//mark position and replace content button
const childContent = (child, player, childPos, btn) => {
  if (child === player) {
    playerMove = playerX;
    movementX += childPos;
    btn.textContent = playerMove;
    msgTurn.innerText = `Turn Player: ${playerO}`;
  } else {
    playerMove = playerO;
    movementO += childPos;
    btn.textContent = playerMove;
    msgTurn.innerText = `Turn Player: ${playerX}`;
  }
};
//start game and create board
const startGame = () => {
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let pos = parseInt(btn.getAttribute("data-position"));
      btn.textContent = playerMove;
      childContent(btn.textContent, playerO, pos, btn);
      chekWins();
    });
  });
};
//reload game
const reloadGame = () => {
  let sec = 5;
  setInterval(() => {
    msgPlayAgain.style.display = "block";
    msgPlayAgain.innerHTML = `Play again in ${sec}`;
    sec--;
    if (sec < 0) {
      window.location.reload();
    }
  }, 1000);
};
startGame();
