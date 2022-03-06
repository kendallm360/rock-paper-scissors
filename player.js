class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
    this.weapon = null;
  }
  getClassicWeapon() {
    var options = ["rock", "paper", "scissors"];
    var i = Math.floor(Math.random() * options.length);
    return options[i];
  }
  getModernWeapon() {
    var options = ["ninja", "hunter", "rock", "paper", "scissors"];
    var i = Math.floor(Math.random() * options.length);
    return options[i];
  }
}
// (ninja > paper) & hunter;
// (hunter > scissors) & rock;
