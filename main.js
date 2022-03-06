var game = new Game();

//VARIABLES/QUERY SELECTORS
var subTitle = document.querySelector("h2");
var chooseGame = document.querySelector(".choose-game");
var classicGame = document.querySelector(".easy-mode");
var modernGame = document.querySelector(".hard-mode");
var classicWeapons = document.querySelector(".classic-weapons");
var modernWeapons = document.querySelector(".modern-weapons");
var rock = document.querySelector(".rock-emoji");
var paper = document.querySelector(".paper-emoji");
var scissors = document.querySelector(".scissors-emoji");
var hunter = document.querySelector(".hunter-emoji");
var ninja = document.querySelector(".ninja-emoji");

//GLOBAL VARIABLES

//EVENT LISTENERS
classicGame.addEventListener("click", showClassicWeapons);
modernGame.addEventListener("click", showModernWeapons);
chooseGame.addEventListener("click", newGame);
rock.addEventListener("click", pickRock);
paper.addEventListener("click", pickPaper);
scissors.addEventListener("click", pickScissors);
ninja.addEventListener("click", pickNinja);
hunter.addEventListener("click", pickHunter);

//FUNCTIONS
function showClassicWeapons() {
  chooseGame.classList.remove("hidden");
  subTitle.classList.add("hidden");
  classicWeapons.classList.remove("hidden");
  classicGame.classList.add("hidden");
  modernGame.classList.add("hidden");
}

function showModernWeapons() {
  chooseGame.classList.remove("hidden");
  subTitle.classList.add("hidden");
  modernWeapons.classList.remove("hidden");
  classicGame.classList.add("hidden");
  modernGame.classList.add("hidden");
}
function newGame() {
  chooseGame.classList.add("hidden");
  subTitle.classList.remove("hidden");

  classicWeapons.classList.add("hidden");
  modernWeapons.classList.add("hidden");
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

function pickNinja() {
  Player.weapon = "ninja";
  console.log(Player.weapon);
  //   Game.declareWinner();
}

function pickHunter() {
  Player.weapon = "hunter";
  console.log(Player.weapon);
  //   Game.declareWinner();
}
