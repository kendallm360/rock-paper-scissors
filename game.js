class Game {
  constructor() {
    this.player = new Player("human");
    this.computer = new Player("computer");
    this.humanWeapon = null;
    this.computerWeapon = null;
    this.computerWins = 0;
  }
  playClassicRound(weaponClicked) {
    this.humanWeapon = this.player.chooseWeapon(weaponClicked);
    this.computerWeapon = this.computer.getClassicWeapon();
  }

  declareClassicWinner(weaponClicked) {
    this.playClassicRound(weaponClicked);
    if (this.humanWeapon === "rock" && this.computerWeapon === "scissors") {
      this.player.wins++;
      return "The Human Wins This Round";
    }
    if (this.humanWeapon === "paper" && this.computerWeapon === "rock") {
      this.player.wins++;
      return "The Human Wins This Round";
    }
    if (this.humanWeapon === "scissors" && this.computerWeapon === "paper") {
      this.player.wins++;
      return "The Human Wins This Round";
    }
    if (this.humanWeapon === this.computerWeapon) {
      return "It's A Draw";
    } else {
      this.computerWins++;
      return "The Computer Wins This Round";
    }
  }

  playModernRound(weaponClicked) {
    this.humanWeapon = this.player.chooseWeapon(weaponClicked);
    this.computerWeapon = this.computer.getModernWeapon();
  }

  declareModernWinner(weaponClicked) {
    this.playModernRound(weaponClicked);
    if (
      this.humanWeapon === "rock" &&
      (this.computerWeapon === "scissors" || this.computerWeapon === "ninja")
    ) {
      this.player.wins++;
      return "The Human Wins This Round";
    }
    if (
      this.humanWeapon === "paper" &&
      (this.computerWeapon === "rock" || this.computerWeapon === "hunter")
    ) {
      this.player.wins++;
      return "The Human Wins This Round";
    }
    if (
      this.humanWeapon === "scissors" &&
      (this.computerWeapon === "paper" || this.computerWeapon === "ninja")
    ) {
      this.player.wins++;
      return "The Human Wins This Round";
    }
    if (
      this.humanWeapon === "ninja" &&
      (this.computerWeapon === "hunter" || this.computerWeapon === "paper")
    ) {
      this.player.wins++;
      return "The Human Wins This Round";
    }
    if (
      this.humanWeapon === "hunter" &&
      (this.computerWeapon === "scissors" || this.computerWeapon === "rock")
    ) {
      this.player.wins++;
      return "The Human Wins This Round";
    }
    if (this.humanWeapon === this.computerWeapon) {
      return "It's A Draw";
    } else {
      this.computerWins++;
      return "The Computer Wins This Round";
    }
  }
}
