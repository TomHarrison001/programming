class Player:
    def __init__(self, username):
        self.username = username
        self.health = 20

    def take_damage(self, damage):
        self.health -= damage


class Warrior(Player):
    def __init__(self, username, level):
        super().__init__(username)
        self.level = level
