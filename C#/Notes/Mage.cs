using System;

namespace Inheritance
{
    public class Mage : Player
    {
        int _mana;

        public Mage(string name, int health, int mana)
            : base(name, health)
        {
            _mana = mana;
        }

        public int Mana
        {
            get => _mana;
            set => _mana = value;
        }

        public override string GetDescription()
        {
            return $"{Name}:\nHealth: {Health}\nMana: {_mana}";
        }
    }
}