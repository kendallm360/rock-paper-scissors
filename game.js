class Game {
  constructor() {
    this.options = ["rock", "paper", "scissors"];
    this.player = new Player("human");
    this.computer = new Player("computer");
    this.humanWeapon = this.player.getWeapon();
    this.computerWeapon = this.computer.getWeapon();
    this.computerWins = 0;
    // this.computer =
  }
  playRound() {
    this.humanWeapon = this.player.getWeapon();
    this.computerWeapon = this.computer.getWeapon();
  }

  declareWinner() {
    this.playRound();
    if (this.humanWeapon === "rock" && this.computerWeapon === "paper") {
      return "The Computer Wins This Round";
    }
    if (this.humanWeapon === "rock" && this.computerWeapon === "scissors") {
      Player.wins++;
      return "The Human Wins This Round";
    }
    if (this.humanWeapon === "scissors" && this.computerWeapon === "paper") {
      return "The Human Wins This Round";
    }
    if (this.humanWeapon === "scissors" && this.computerWeapon === "rock") {
      return "The Computer Wins This Round";
    }
    if (this.humanWeapon === "paper" && this.computerWeapon === "rock") {
      return "The Human Wins This Round";
    }
    if (this.humanWeapon === "paper" && this.computerWeapon === "scissors") {
      return "The Computer Wins This Round";
    }
    if (this.humanWeapon === this.computerWeapon) {
      return "It's A Draw";
    }
    // this.addPoint();
    console.log("comp", this.computerWins);
    console.log("hum", this.player.wins);
  }

  addPoint() {
    var response = this.declareWinner();
    if (response === "The Computer Wins This Round") {
      this.computerWins++;
      //restart the game?
    }
    if (response === "The Human Wins This Round") {
      this.player.wins++;
      //restart the game?
    }
    if (response === "It's A Draw") {
      //restart the game?
    }
  }
}
