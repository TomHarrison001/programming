public class Player {
    
    static int id = 0;

    String username;
    int health;

    public Player(String username, int health) {
        this.username = username;
        this.health = health;
    }

    public void takeDamage(int damage) {
        this.health -= damage;
    }

    public String description() {
        return this.username + ":\nHealth: " + this.health;
    }
}
