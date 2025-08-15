class Player {
  constructor(username, health) {
    this.username = username;
    this.health = health;
  }
  take_damage(damage) {
    this.health -= damage;
  }
}

export default Player;

// import Player from "./Player.js";

// const p1 = new Player("Rock", 20);
// p1.take_damage(5);
