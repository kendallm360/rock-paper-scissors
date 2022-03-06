var game = new Game();

//VARIABLES/QUERY SELECTORS
var classicGame = document.querySelector(".easy-mode");
var modernGame = document.querySelector(".hard-mode");
var classicWeapons = document.querySelector(".classic-weapons");
var rock = document.querySelector(".rock-emoji");
var paper = document.querySelector(".paper-emoji");
var scissors = document.querySelector(".scissors-emoji");
var modernWeapons = document.querySelector(".modern-weapons");

//GLOBAL VARIABLES

//EVENT LISTENERS
classicGame.addEventListener("click", showClassicWeapons);
rock.addEventListener("click", pickRock);
paper.addEventListener("click", pickPaper);
scissors.addEventListener("click", pickScissors);
modernGame.addEventListener("click", showModernWeapons);

//FUNCTIONS
function showClassicWeapons() {
  classicWeapons.classList.remove("hidden");
  classicGame.classList.add("hidden");
  modernGame.classList.add("hidden");
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
function showModernWeapons() {
  modernWeapons.classList.remove("hidden");
  classicGame.classList.add("hidden");
  modernGame.classList.add("hidden");
}
