using System;

namespace Inheritance
{
    public class Player
    {
        private string _name;

        public Player(string name, int health)
        {
            _name = name;
            Health = health;
        }

        public string Name
        {
            get { return _name; }

            set
            {
                if (value == null)
                {
                    throw new ArgumentException("Name cannot be null");
                }
                _name = value;
            }
        }

        public int Health
        {
            get; set;
        }

        public virtual string GetDescription()
        {
            return $"{_name}:\nHealth: {Health}";
        }
    }
}