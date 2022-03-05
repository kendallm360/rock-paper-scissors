class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
    this.weapon = ["rock", "paper", "scissors"];
  }
  getWeapon() {
    var options = ["rock", "paper", "scissors"];
    var i = Math.floor(Math.random() * options.length);
    return options[i];
  }
}
