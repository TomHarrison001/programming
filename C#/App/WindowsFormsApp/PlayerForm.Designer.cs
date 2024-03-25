namespace WindowsFormsApp
{
    partial class PlayerForm
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            headerLabel = new Label();
            addNewPlayerGroupBox = new GroupBox();
            createPlayerButton = new Button();
            healthValue = new TextBox();
            healthLabel = new Label();
            usernameValue = new TextBox();
            usernameLabel = new Label();
            playersListBox = new ListBox();
            addNewPlayerGroupBox.SuspendLayout();
            SuspendLayout();
            // 
            // headerLabel
            // 
            headerLabel.AutoSize = true;
            headerLabel.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            headerLabel.ForeColor = Color.Teal;
            headerLabel.Location = new Point(12, 9);
            headerLabel.Name = "headerLabel";
            headerLabel.Size = new Size(60, 21);
            headerLabel.TabIndex = 0;
            headerLabel.Text = "Players";
            // 
            // addNewPlayerGroupBox
            // 
            addNewPlayerGroupBox.Controls.Add(createPlayerButton);
            addNewPlayerGroupBox.Controls.Add(healthValue);
            addNewPlayerGroupBox.Controls.Add(healthLabel);
            addNewPlayerGroupBox.Controls.Add(usernameValue);
            addNewPlayerGroupBox.Controls.Add(usernameLabel);
            addNewPlayerGroupBox.FlatStyle = FlatStyle.Flat;
            addNewPlayerGroupBox.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            addNewPlayerGroupBox.ForeColor = Color.Teal;
            addNewPlayerGroupBox.Location = new Point(12, 62);
            addNewPlayerGroupBox.Name = "addNewPlayerGroupBox";
            addNewPlayerGroupBox.Size = new Size(245, 172);
            addNewPlayerGroupBox.TabIndex = 20;
            addNewPlayerGroupBox.TabStop = false;
            addNewPlayerGroupBox.Text = "Create Player";
            // 
            // createPlayerButton
            // 
            createPlayerButton.FlatStyle = FlatStyle.Flat;
            createPlayerButton.Location = new Point(63, 122);
            createPlayerButton.Name = "createPlayerButton";
            createPlayerButton.Size = new Size(118, 32);
            createPlayerButton.TabIndex = 21;
            createPlayerButton.Text = "Create Player";
            createPlayerButton.UseVisualStyleBackColor = true;
            createPlayerButton.Click += createPlayerButton_Click;
            // 
            // healthValue
            // 
            healthValue.Location = new Point(93, 77);
            healthValue.Name = "healthValue";
            healthValue.Size = new Size(144, 29);
            healthValue.TabIndex = 12;
            // 
            // healthLabel
            // 
            healthLabel.AutoSize = true;
            healthLabel.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            healthLabel.ForeColor = Color.Teal;
            healthLabel.Location = new Point(6, 81);
            healthLabel.Name = "healthLabel";
            healthLabel.Size = new Size(55, 21);
            healthLabel.TabIndex = 11;
            healthLabel.Text = "Health";
            // 
            // usernameValue
            // 
            usernameValue.Location = new Point(93, 42);
            usernameValue.Name = "usernameValue";
            usernameValue.Size = new Size(144, 29);
            usernameValue.TabIndex = 10;
            // 
            // usernameLabel
            // 
            usernameLabel.AutoSize = true;
            usernameLabel.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            usernameLabel.ForeColor = Color.Teal;
            usernameLabel.Location = new Point(6, 46);
            usernameLabel.Name = "usernameLabel";
            usernameLabel.Size = new Size(81, 21);
            usernameLabel.TabIndex = 9;
            usernameLabel.Text = "Username";
            // 
            // playersListBox
            // 
            playersListBox.BorderStyle = BorderStyle.FixedSingle;
            playersListBox.FormattingEnabled = true;
            playersListBox.ItemHeight = 15;
            playersListBox.Location = new Point(272, 11);
            playersListBox.Name = "playersListBox";
            playersListBox.Size = new Size(131, 272);
            playersListBox.TabIndex = 21;
            // 
            // PlayerForm
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(422, 302);
            Controls.Add(playersListBox);
            Controls.Add(addNewPlayerGroupBox);
            Controls.Add(headerLabel);
            Name = "PlayerForm";
            Text = "Player Form";
            addNewPlayerGroupBox.ResumeLayout(false);
            addNewPlayerGroupBox.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label headerLabel;
        private GroupBox addNewPlayerGroupBox;
        private Label usernameLabel;
        private TextBox usernameValue;
        private TextBox healthValue;
        private Label healthLabel;
        private Button createPlayerButton;
        private ListBox playersListBox;
    }
}