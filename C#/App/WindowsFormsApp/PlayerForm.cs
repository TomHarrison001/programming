using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using ClassLibrary;
using ClassLibrary.Models;

namespace WindowsFormsApp
{
    public partial class PlayerForm : Form
    {
        List<PlayerModel> players = GlobalConfig.Connection.GetPlayers();

        public PlayerForm()
        {
            InitializeComponent();

            WireUpLists();
        }

        private void WireUpLists()
        {
            playersListBox.DataSource = null;

            playersListBox.DataSource = players;
            playersListBox.DisplayMember = "Username";
        }

        private void createPlayerButton_Click(object sender, EventArgs e)
        {
            if (ValidateForm() == 0)
            {
                PlayerModel p = new PlayerModel();

                p.Username = usernameValue.Text;
                p.Health = int.Parse(healthValue.Text);

                GlobalConfig.Connection.CreatePlayer(p);

                players.Add(p);

                WireUpLists();

                usernameValue.Text = "";
                healthValue.Text = "";
            }
            else if (ValidateForm() == -1)
            {
                MessageBox.Show("You need to fill in all of the fields.");
            }
            else
            {
                MessageBox.Show("Health must be an integer.");
            }
        }

        private int ValidateForm()
        {
            if (usernameValue.Text.Length == 0)
            {
                return -1;
            }

            if (healthValue.Text.Length == 0)
            {
                return -1;
            }

            try
            {
                int hp;
                hp = int.Parse(healthValue.Text);
            }
            catch
            {
                return -2;
            }

            return 0;
        }
    }
}