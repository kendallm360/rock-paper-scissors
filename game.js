class Game {
  constructor() {
    this.options = ["rock", "paper", "scissors"];
    this.player = new Player("human");
    this.computer = new Player("computer");
    this.humanWeapon = null;
    this.computerWeapon = null;
    this.computerWins = 0;
  }
  playClassicRound() {
    this.humanWeapon = this.player.getClassicWeapon();
    this.computerWeapon = this.computer.getClassicWeapon();
  }

  declareClassicWinner() {
    this.playClassicRound();
    if (this.humanWeapon === "rock" && this.computerWeapon === "paper") {
      this.computerWins++;
      return "The Computer Wins This Round";
    }
    if (this.humanWeapon === "rock" && this.computerWeapon === "scissors") {
      this.player.wins++;
      return "The Human Wins This Round";
    }
    if (this.humanWeapon === "scissors" && this.computerWeapon === "paper") {
      this.player.wins++;

      return "The Human Wins This Round";
    }
    if (this.humanWeapon === "scissors" && this.computerWeapon === "rock") {
      this.computerWins++;
      return "The Computer Wins This Round";
    }
    if (this.humanWeapon === "paper" && this.computerWeapon === "rock") {
      this.player.wins++;
      return "The Human Wins This Round";
    }
    if (this.humanWeapon === "paper" && this.computerWeapon === "scissors") {
      this.computerWins++;
      return "The Computer Wins This Round";
    }
    if (this.humanWeapon === this.computerWeapon) {
      return "It's A Draw";
    }
  }

  playModernRound(weaponClicked) {
    this.humanWeapon = "ninja";
    this.computerWeapon = this.computer.getModernWeapon();
  }

  declareModernWinner() {
    this.playModernRound();
    if (this.humanWeapon === "rock" && this.computerWeapon === "paper") {
      this.computerWins++;
      console.log("human", this.humanWeapon);
      console.log(this.computerWeapon);
      return "The Computer Wins This Round";
    }
    if (this.humanWeapon === "rock" && this.computerWeapon === "scissors") {
      this.player.wins++;
      console.log("human", this.humanWeapon);
      console.log(this.computerWeapon);
      return "The Human Wins This Round";
    }
    if (this.humanWeapon === "scissors" && this.computerWeapon === "paper") {
      this.player.wins++;
      console.log("human", this.humanWeapon);
      console.log(this.computerWeapon);
      return "The Human Wins This Round";
    }
    if (this.humanWeapon === "scissors" && this.computerWeapon === "rock") {
      this.computerWins++;
      console.log("human", this.humanWeapon);
      console.log(this.computerWeapon);
      return "The Computer Wins This Round";
    }
    if (this.humanWeapon === "paper" && this.computerWeapon === "rock") {
      this.player.wins++;
      console.log("human", this.humanWeapon);
      console.log(this.computerWeapon);
      return "The Human Wins This Round";
    }
    if (this.humanWeapon === "paper" && this.computerWeapon === "scissors") {
      this.computerWins++;
      console.log("human", this.humanWeapon);
      console.log(this.computerWeapon);
      return "The Computer Wins This Round";
    }
    if (this.humanWeapon === this.computerWeapon) {
      console.log("human", this.humanWeapon);
      console.log(this.computerWeapon);
      return "It's A Draw";
    }
    if (this.humanWeapon === "ninja" && this.computerWeapon === "hunter") {
      console.log("human", this.humanWeapon);
      console.log(this.computerWeapon);
      return "The Human Wins This Round";
    }
    if (this.humanWeapon === "ninja" && this.computerWeapon === "paper") {
      console.log("human", this.humanWeapon);
      console.log(this.computerWeapon);
      return "The Human Wins This Round";
    }
    if (this.humanWeapon === "hunter" && this.computerWeapon === "scissors") {
      console.log("human", this.humanWeapon);
      console.log(this.computerWeapon);
      return "The Human Wins This Round";
    }
    if (this.humanWeapon === "hunter" && this.computerWeapon === "rock") {
      console.log("human", this.humanWeapon);
      console.log(this.computerWeapon);
      return "The Human Wins This Round";
    } else {
      console.log("human", this.humanWeapon);
      console.log(this.computerWeapon);
      return "The Computer Wins This Round";
    }
  }
}

//may use a variation of the code below to make the function above more dry/in accordance with SRP
// addPoint() {
//   var response = this.declareClassicWinner();
//   if (response === "The Computer Wins This Round") {
//     this.computerWins++;
//     //restart the game?
//   }
//   if (response === "The Human Wins This Round") {
//     this.player.wins++;
//     //restart the game?
//   }
//   if (response === "It's A Draw") {
//     //restart the game?
//   }
// }
