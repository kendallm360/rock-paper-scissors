var game = new Game();

//VARIABLES/QUERY SELECTORS
var changeGame = document.querySelector(".change-game");
var chooseGame = document.querySelector(".choose-game");
var chooseWeapon = document.querySelector(".choose-weapon");
// var winnerAlert = document.querySelector(".winner-alert");
var classicGame = document.querySelector(".classic-mode");
var modernGame = document.querySelector(".modern-mode");
var classicWeapons = document.querySelector(".classic-weapons");
// var modernWeapons = document.querySelector(".modern-weapons");
// var classicRock = document.querySelector(".classic-rock-emoji");

var rock = document.querySelector(".rock-emoji");
var paper = document.querySelector(".paper-emoji");
var scissors = document.querySelector(".scissors-emoji");
var hunter = document.querySelector(".hunter-emoji");
var ninja = document.querySelector(".ninja-emoji");
var winnerBox = document.querySelector(".winner-box");
var winnerAlert = document.querySelector(".winner-alert");

//GLOBAL VARIABLES

//EVENT LISTENERS
classicGame.addEventListener("click", showClassicWeapons);

modernGame.addEventListener("click", showModernWeapons);

changeGame.addEventListener("click", newGame);
// modernRock.addEventListener("click", pickModernRock);
// classicWeapons.addEventListener("click", pickWeapon2);
rock.addEventListener("click", pickRock);
paper.addEventListener("click", pickPaper);
scissors.addEventListener("click", pickScissors);
hunter.addEventListener("click", pickHunter);
ninja.addEventListener("click", pickNinja);
// winnerBox.addEventListener("click", displayWinner);

//FUNCTIONS

function showClassicWeapons() {
  game.startNewGame("classic");
  changeGame.classList.remove("hidden");
  chooseGame.classList.add("hidden");
  chooseWeapon.classList.remove("hidden");
  classicWeapons.classList.remove("hidden");
  classicGame.classList.add("hidden");
  modernGame.classList.add("hidden");
  hunter.classList.add("hidden");
  ninja.classList.add("hidden");
  rock.classList.remove("hidden");
  paper.classList.remove("hidden");
  scissors.classList.remove("hidden");
}

function showModernWeapons() {
  game.startNewGame("modern");

  changeGame.classList.remove("hidden");
  chooseGame.classList.add("hidden");
  chooseWeapon.classList.remove("hidden");
  classicWeapons.classList.remove("hidden");
  classicGame.classList.add("hidden");
  modernGame.classList.add("hidden");
  hunter.classList.remove("hidden");
  ninja.classList.remove("hidden");
  rock.classList.remove("hidden");
  paper.classList.remove("hidden");
  scissors.classList.remove("hidden");
}

function newGame() {
  changeGame.classList.add("hidden");
  chooseGame.classList.remove("hidden");
  chooseWeapon.classList.add("hidden");
  classicWeapons.classList.add("hidden");
  classicGame.classList.remove("hidden");
  modernGame.classList.remove("hidden");
}

function pickRock() {
  if (game.gameMode === "classic") {
    game.declareClassicWinner("rock");
  }
  if (game.gameMode === "modern") {
    game.declareModernWinner("rock");
  }
  if (game.winner === "human") {
    winnerAlert.innerText = "The Human Wins This Round";
  }
  if (game.winner === "computer") {
    winnerAlert.innerText = "The Computer Wins This Round";
  }
  if (game.winner === "draw") {
    winnerAlert.innerText = "It's A Draw";
  }
  displayWinner();
}

function pickPaper() {
  if (game.gameMode === "classic") {
    game.declareClassicWinner("paper");
  }
  if (game.gameMode === "modern") {
    game.declareModernWinner("paper");
  }
  if (game.winner === "human") {
    winnerAlert.innerText = "The Human Wins This Round";
  }
  if (game.winner === "computer") {
    winnerAlert.innerText = "The Computer Wins This Round";
  }
  if (game.winner === "draw") {
    winnerAlert.innerText = "It's A Draw";
  }
  displayWinner();
}

function pickScissors() {
  if (game.gameMode === "classic") {
    game.declareClassicWinner("scissors");
  } else {
    game.declareModernWinner("scissors");
  }
  if (game.winner === "human") {
    winnerAlert.innerText = "The Human Wins This Round";
  }
  if (game.winner === "computer") {
    winnerAlert.innerText = "The Computer Wins This Round";
  }
  if (game.winner === "draw") {
    winnerAlert.innerText = "It's A Draw";
  }
  winnerAlert.classList.remove("hidden");
  console.log("comp weapon", game.computerWeapon);
  console.log("hum weapon", game.player.weapon);
  console.log("comp score", game.computerWins);
  console.log("hum score", game.player.wins);
  displayWinner();
}

function pickHunter() {
  game.declareModernWinner("hunter");

  if (game.winner === "human") {
    winnerAlert.innerText = "The Human Wins This Round";
  }
  if (game.winner === "computer") {
    winnerAlert.innerText = "The Computer Wins This Round";
  }
  if (game.winner === "draw") {
    winnerAlert.innerText = "It's A Draw";
  }
  displayWinner();
}

function pickNinja() {
  game.declareModernWinner("ninja");
  if (game.winner === "human") {
    winnerAlert.innerText = "The Human Wins This Round";
  }
  if (game.winner === "computer") {
    winnerAlert.innerText = "The Computer Wins This Round";
  }
  if (game.winner === "draw") {
    winnerAlert.innerText = "It's A Draw";
  }
  displayWinner();
}

function displayWinner() {
  winnerBox.classList.remove("hidden");
  changeGame.classList.add("hidden");
  chooseGame.classList.add("hidden");
  chooseWeapon.classList.add("hidden");
  winnerAlert.classList.remove("hidden");
  classicWeapons.classList.add("hidden");
  classicGame.classList.add("hidden");
  modernGame.classList.add("hidden");
  winnerAlert.classList.remove("hidden");

  setTimeout(function () {
    //everything here will be what shows after reset
    winnerAlert.innerText = "test";
  }, 2000);
}

// save for refactoring
// function pickWeapon(weapon) {
//   if (this.gameMode === "classic") {
//     game.declareClassicWinner(weapon);
//   } else {
//     game.declareModernWinner(weapon);
//   }
// }

//variation 2 below
// function pickWeapon2(event) {
//   if (this.gameMode === "classic") {
//     game.declareClassicWinner(event.target.value);
//   } else {
//     game.declareModernWinner(event.target.value);
//   }
// }

//save for refactor
// function handlePlayerChoice(event) {
//   if (game.gameMode === "classic") {
//     handlePlayerChoiceClassic(event);
//   }
// }
// function handlePlayerChoiceClassic(event) {
//   if (event.target.classList.contains(".rock-emoji")) {
//     pickWeapon(event.target.value);
//   } else if (event.target.classList.contains(".paper-emoji")) {
//     pickWeapon("paper");
//   }
// }
