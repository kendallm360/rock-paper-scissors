class Player {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.wins = 0;
  }
  getClassicWeapon(weaponClicked) {
    var options = ["rock", "paper", "scissors"];
    var i = Math.floor(Math.random() * options.length);
    return weaponClicked || options[i];
  }
  getModernWeapon(weaponClicked) {
    var options = ["ninja", "hunter", "rock", "paper", "scissors"];
    var i = Math.floor(Math.random() * options.length);
    return weaponClicked || options[i];
  }

  chooseWeapon(weaponClicked) {
    return weaponClicked || this.getModernWeapon();
  }
}
