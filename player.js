class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
    this.weapon = ["rock", "paper", "scissors"];
  }
  // playRound() {
  //   var weapon = options[getWeapon(options)];
  // }
  getWeapon() {
    var options = ["rock", "paper", "scissors"];
    var i = Math.floor(Math.random() * options.length);
    return options[i];
  }
}
