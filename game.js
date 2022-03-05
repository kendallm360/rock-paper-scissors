class Game {
  constructor(human, computer) {
    this.options = ["rock", "paper", "scissors"];
    this.humanWeapon = "rock";
    this.computerWeapon = this.getWeapon();
    this.computerWins = 0;
    this.player = new Player(human);
  }
  getSelection(options) {
    ///need to set up a function or for loop that generates the selection and "gives" it to the computer
    return Math.floor(Math.random() * options.length);
  }
  declareWinner() {
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
  }

  addPoint() {
    var response = declareWinner();
    if (response === "The Computer Wins This Round") {
      this.computerWins++;
      //restart the game?
    }
    if (response === "The Human Wins This Round") {
      Player.wins++;
      //restart the game?
    }
    if (response === "It's A Draw") {
      //restart the game?
    }
  }
  getWeapon() {
    var options = ["rock", "paper", "scissors"];
    var i = Math.floor(Math.random() * options.length);
    return options[i];
  }
}
