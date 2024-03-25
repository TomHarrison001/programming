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
