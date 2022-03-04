class Player {
  constructor(name) {
    this.name = name;
    this.wins = wins;
    var options = ["rock", "paper", "scissors"];
  }
  playRound() {
    var character = options[getCharacter(options)];
  }
  getCharacter(options) {
    //how do i connect the argument options above/below to the variable options?
    return Math.floor(Math.random() * options.length);
  }
}
// console.log(Math.floor(Math.random() * this.options.length));
