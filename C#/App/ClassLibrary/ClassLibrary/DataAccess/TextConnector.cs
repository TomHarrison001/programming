using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibrary.Models;
using ClassLibrary.DataAccess;

namespace ClassLibrary.DataAccess
{
    public class TextConnector : IDataConnection
    {

        public void CreatePlayer(PlayerModel model)
        {
            List<PlayerModel> players = GlobalConfig.PlayerFile.FullFilePath().LoadFile().ConvertToPlayerModels();

            int currentId = 1;

            if (players.Count > 0)
            {
                currentId = players.OrderByDescending(x => x.Id).First().Id + 1;
            }

            model.Id = currentId;

            players.Add(model);

            players.SaveToPlayerFile();
        }

        public List<PlayerModel> GetPlayers()
        {
            return GlobalConfig.PlayerFile.FullFilePath().LoadFile().ConvertToPlayerModels();
        }
    }
}
