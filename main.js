//GLOBAL VARIABLES
var game = new Game();

//VARIABLES/QUERY SELECTORS
var changeGame = document.querySelector(".change-game");
var chooseGame = document.querySelector(".choose-game");
var chooseWeapon = document.querySelector(".choose-weapon");
var classicGame = document.querySelector(".classic-mode");
var modernGame = document.querySelector(".modern-mode");
var classicWeapons = document.querySelector(".classic-weapons");
var rock = document.querySelector(".rock-emoji");
var paper = document.querySelector(".paper-emoji");
var scissors = document.querySelector(".scissors-emoji");
var hunter = document.querySelector(".hunter-emoji");
var ninja = document.querySelector(".ninja-emoji");
var winnerBox = document.querySelector(".winner-box");
var humanWeaponBox = document.querySelector(".human-weapon-emoji");
var computerWeaponBox = document.querySelector(".computer-weapon-emoji");
var winnerAlert = document.querySelector(".winner-alert");
var humanWins = document.querySelector(".human-wins");
var computerWins = document.querySelector(".computer-wins");

//EVENT LISTENERS
classicGame.addEventListener("click", () => handleGameVariant(true));
modernGame.addEventListener("click", () => handleGameVariant(false));
changeGame.addEventListener("click", newGame);
rock.addEventListener("click", pickRock);
paper.addEventListener("click", pickPaper);
scissors.addEventListener("click", pickScissors);
hunter.addEventListener("click", pickHunter);
ninja.addEventListener("click", pickNinja);

//FUNCTIONS
function handleGameVariant(isClassic) {
  hideAllElements();
  changeGame.classList.remove("hidden");
  chooseWeapon.classList.remove("hidden");
  classicWeapons.classList.remove("hidden");
  rock.classList.remove("hidden");
  paper.classList.remove("hidden");
  scissors.classList.remove("hidden");
  if (isClassic === true) {
    game.startNewGame("classic");
    hunter.classList.add("hidden");
    ninja.classList.add("hidden");
  } else {
    game.startNewGame("modern");
    hunter.classList.remove("hidden");
    ninja.classList.remove("hidden");
  }
}

function newGame() {
  hideAllElements();
  chooseGame.classList.remove("hidden");
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
    humanWins.innerText = "Human Wins: " + game.player.wins;
    winnerAlert.innerText = "😎 The Human Wins This Round 😎";
  }
  if (game.winner === "computer") {
    computerWins.innerText = "Computer Wins: " + game.computerWins;
    winnerAlert.innerText = "💻 The Computer Wins This Round 💻";
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
    humanWins.innerText = "Human Wins: " + game.player.wins;
    winnerAlert.innerText = "😎 The Human Wins This Round 😎";
  }
  if (game.winner === "computer") {
    computerWins.innerText = "Computer Wins: " + game.computerWins;
    winnerAlert.innerText = "💻 The Computer Wins This Round 💻";
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
    humanWins.innerText = "Human Wins: " + game.player.wins;
    winnerAlert.innerText = "😎 The Human Wins This Round 😎";
  }
  if (game.winner === "computer") {
    computerWins.innerText = "Computer Wins: " + game.computerWins;
    winnerAlert.innerText = "💻 The Computer Wins This Round 💻";
  }
  if (game.winner === "draw") {
    winnerAlert.innerText = "It's A Draw";
  }
  displayWinner();
}

function pickHunter() {
  game.declareModernWinner("hunter");
  if (game.winner === "human") {
    humanWins.innerText = "Human Wins: " + game.player.wins;
    winnerAlert.innerText = "😎 The Human Wins This Round 😎";
  }
  if (game.winner === "computer") {
    computerWins.innerText = "Computer Wins: " + game.computerWins;
    winnerAlert.innerText = "💻 The Computer Wins This Round 💻";
  }
  if (game.winner === "draw") {
    winnerAlert.innerText = "It's A Draw";
  }
  displayWinner();
}

function pickNinja() {
  game.declareModernWinner("ninja");
  if (game.winner === "human") {
    humanWins.innerText = "Human Wins: " + game.player.wins;
    winnerAlert.innerText = "😎 The Human Wins This Round 😎";
  }
  if (game.winner === "computer") {
    computerWins.innerText = "Computer Wins: " + game.computerWins;
    winnerAlert.innerText = "💻 The Computer Wins This Round 💻";
  }
  if (game.winner === "draw") {
    winnerAlert.innerText = "It's A Draw";
  }
  displayWinner();
}

function displayWinner() {
  hideAllElements();
  winnerBox.classList.remove("hidden");
  winnerAlert.classList.remove("hidden");
  checkClassicWeapon();
  checkModernWeapon();
  checkComputerWeaponClassic();
  checkComputerWeaponModern();
  setTimeout(function () {
    if (game.gameMode === "modern") {
      handleGameVariant(false);
    } else {
      handleGameVariant(true);
    }
  }, 2000);
}

function setWeapon(weapon, isPlayer) {
  if (isPlayer === true) {
    humanWeaponBox.innerHTML =
      "YOUR WEAPON " +
      `<img class="${weapon}-emoji" src="./${weapon}.png" alt="Emoji of the ${weapon} Weapon"/>`;
  } else {
    computerWeaponBox.innerHTML =
      "COMPUTER'S WEAPON " +
      `<img class="${weapon}-emoji" src="./${weapon}.png" alt="Emoji of the ${weapon} Weapon"/>`;
  }
}

function checkClassicWeapon() {
  if (game.player.weapon === "rock") {
    setWeapon("rock", true);
  }
  if (game.player.weapon === "paper") {
    setWeapon("paper", true);
  }
  if (game.player.weapon === "scissors") {
    setWeapon("scissors", true);
  }
}

function checkModernWeapon() {
  if (game.player.weapon === "hunter") {
    setWeapon("hunter", true);
  }
  if (game.player.weapon == "ninja") {
    setWeapon("ninja", true);
  }
}

function checkComputerWeaponClassic() {
  if (game.computerWeapon === "rock") {
    setWeapon("rock", false);
  }
  if (game.computerWeapon === "paper") {
    setWeapon("paper", false);
  }

  if (game.computerWeapon === "scissors") {
    setWeapon("scissors", false);
  }
}

function checkComputerWeaponModern() {
  if (game.computerWeapon === "hunter") {
    setWeapon("hunter", false);
  }
  if (game.computerWeapon == "ninja") {
    setWeapon("ninja", false);
  }
}

function hideAllElements() {
  winnerBox.classList.add("hidden");
  winnerAlert.classList.add("hidden");
  changeGame.classList.add("hidden");
  chooseGame.classList.add("hidden");
  chooseWeapon.classList.add("hidden");
  classicWeapons.classList.add("hidden");
  classicGame.classList.add("hidden");
  modernGame.classList.add("hidden");
  rock.classList.add("hidden");
  paper.classList.add("hidden");
  scissors.classList.add("hidden");
  hunter.classList.add("hidden");
  ninja.classList.add("hidden");
}
