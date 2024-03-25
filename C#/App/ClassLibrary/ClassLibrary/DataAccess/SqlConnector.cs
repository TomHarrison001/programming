using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibrary.Models;

namespace ClassLibrary.DataAccess
{
    public class SqlConnector : IDataConnection
    {
        private const string db = "Database";

        public void CreatePlayer(PlayerModel model)
        {
            using (IDbConnection connection = new System.Data.SqlClient.SqlConnection(GlobalConfig.CnnString(db)))
            {
                var p = new DynamicParameters();
                p.Add("@Username", model.Username);
                p.Add("@Health", model.Health);
                p.Add("@id", 0, dbType: DbType.Int32, direction: ParameterDirection.Output);

                connection.Execute("dbo.spPlayers_Insert", p, commandType: CommandType.StoredProcedure);

                model.Id = p.Get<int>("id");
            }
        }

        public List<PlayerModel> GetPlayers()
        {
            List<PlayerModel> output;

            using (IDbConnection connection = new System.Data.SqlClient.SqlConnection(GlobalConfig.CnnString(db)))
            {
                output = connection.Query<PlayerModel>("dbo.spGetPlayers").ToList();
            }

            return output;
        }
    }
}
