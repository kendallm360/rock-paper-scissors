class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
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
