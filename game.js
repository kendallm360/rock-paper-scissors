class Game {
  constructor(humanSelection, computerSelection) {
    this.options = ["rock", "paper", "scissors"];
    this.humanSelection = humanSelection;
    this.computerSelection = computerSelection;
    this.computerWins = 0;
  }
  getSelection(options) {
    ///need to set up a function or for loop that generates the selection and "gives" it to the userss
    return Math.floor(Math.random() * options.length);
  }
  declareWinner() {
    if (this.humanSelection === "rock" && this.computerSelection === "paper") {
      return "The Computer Wins This Round";
    }
    if (
      this.humanSelection === "rock" &&
      this.computerSelection === "scissors"
    ) {
      return "The Human Wins This Round";
    }
    if (
      this.humanSelection === "scissors" &&
      this.computerSelection === "paper"
    ) {
      return "The Human Wins This Round";
    }
    if (
      this.humanSelection === "scissors" &&
      this.computerSelection === "rock"
    ) {
      return "The Computer Wins This Round";
    }
    if (this.humanSelection === "paper" && this.computerSelection === "rock") {
      return "The Human Wins This Round";
    }
    if (
      this.humanSelection === "paper" &&
      this.computerSelection === "scissors"
    ) {
      return "The Computer WinsThis Round";
    }
    if (this.humanSelection === this.computerSelection) {
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
}
