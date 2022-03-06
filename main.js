// var game = new Game();

//VARIABLES/QUERY SELECTORS
var changeGame = document.querySelector(".change-game");
var chooseGame = document.querySelector(".choose-game");
var chooseWeapon = document.querySelector(".choose-weapon");
var winnerAlert = document.querySelector(".winner-alert");
var classicGame = document.querySelector(".classic-mode");
var modernGame = document.querySelector(".modern-mode");
var classicWeapons = document.querySelector(".classic-weapons");
var modernWeapons = document.querySelector(".modern-weapons");
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
rock.addEventListener("click", pickRock);
paper.addEventListener("click", pickPaper);
scissors.addEventListener("click", pickScissors);
hunter.addEventListener("click", pickHunter);
ninja.addEventListener("click", pickNinja);
// winnerBox.addEventListener("click", displayWinner);

//FUNCTIONS
function showClassicWeapons() {
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
  Player.weapon = "rock";
  console.log(Player.weapon);
  //   Game.declareWinner();
}

function pickPaper() {
  Player.weapon = "paper";
  console.log(Player.weapon);
}

function pickScissors() {
  Player.weapon = "scissors";

  console.log(Player.weapon);
}

function pickHunter() {
  Player.weapon = "hunter";
  var game = new Game();
  game.declareModernWinner();
  console.log(Player.weapon);
  //   Game.declareWinner();
}

function pickNinja() {
  var game = new Game();
  // var response = Game.declareModernWinner("ninja");
  displayWinner();
  // console.log(response);
  console.log("comp weapon", game.computerWeapon);
  console.log("hum weapon", game.humanWeapon);
  console.log("comp score", game.computerWins);
  console.log("hum score", game.player.wins);
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
}
