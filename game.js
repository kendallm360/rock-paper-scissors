class Game {
  constructor() {
    this.player = new Player("human");
    this.computer = new Player("computer");
    this.computerWeapon = "";
    this.computerWins = 0;
    this.gameMode = "";
    this.winner = "";
  }

  startNewGame(gameMode) {
    this.player.weapon = "";
    this.computerWeapon = "";
    this.gameMode = gameMode;
  }

  playClassicRound(weaponClicked) {
    this.player.weapon = this.player.chooseWeapon(weaponClicked);
    this.computerWeapon = this.computer.getClassicWeapon();
  }

  declareClassicWinner(weaponClicked) {
    this.playClassicRound(weaponClicked);
    if (this.player.weapon === "rock" && this.computerWeapon === "scissors") {
      this.player.wins++;
      this.winner = "human";
      return "The Human Wins This Round";
    }
    if (this.player.weapon === "paper" && this.computerWeapon === "rock") {
      this.player.wins++;
      this.winner = "human";
      return "The Human Wins This Round";
    }
    if (this.player.weapon === "scissors" && this.computerWeapon === "paper") {
      this.player.wins++;
      this.winner = "human";
      return "The Human Wins This Round";
    }
    if (this.player.weapon === this.computerWeapon) {
      this.winner = "draw";
      return "It's A Draw";
    } else {
      this.computerWins++;
      this.winner = "computer";
      return "The Computer Wins This Round";
    }
  }

  playModernRound(weaponClicked) {
    this.player.weapon = this.player.chooseWeapon(weaponClicked);
    this.computerWeapon = this.computer.getModernWeapon();
  }

  declareModernWinner(weaponClicked) {
    this.playModernRound(weaponClicked);
    if (
      this.player.weapon === "rock" &&
      (this.computerWeapon === "scissors" || this.computerWeapon === "ninja")
    ) {
      this.player.wins++;
      this.winner = "human";
      return "The Human Wins This Round";
    }
    if (
      this.player.weapon === "paper" &&
      (this.computerWeapon === "rock" || this.computerWeapon === "hunter")
    ) {
      this.player.wins++;
      this.winner = "human";
      return "The Human Wins This Round";
    }
    if (
      this.player.weapon === "scissors" &&
      (this.computerWeapon === "paper" || this.computerWeapon === "ninja")
    ) {
      this.player.wins++;
      this.winner = "human";
      return "The Human Wins This Round";
    }
    if (
      this.player.weapon === "ninja" &&
      (this.computerWeapon === "hunter" || this.computerWeapon === "paper")
    ) {
      this.player.wins++;
      this.winner = "human";
      return "The Human Wins This Round";
    }
    if (
      this.player.weapon === "hunter" &&
      (this.computerWeapon === "scissors" || this.computerWeapon === "rock")
    ) {
      this.player.wins++;
      this.winner = "human";
      return "The Human Wins This Round";
    }
    if (this.player.weapon === this.computerWeapon) {
      this.winner = "draw";
      return "It's A Draw";
    } else {
      this.computerWins++;
      this.winner = "computer";
      return "The Computer Wins This Round";
    }
  }
}
