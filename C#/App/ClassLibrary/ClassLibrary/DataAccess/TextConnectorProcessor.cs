using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibrary.Models;

namespace ClassLibrary.DataAccess
{
    public static class TextConnectorProcessor
    {
        public static string FullFilePath(this string fileName)
        {
            return $"{ConfigurationManager.AppSettings["filePath"]}\\{fileName}";
        }

        public static List<string> LoadFile(this string file)
        {
            if (!File.Exists(file))
            {
                return new List<string>();
            }

            return File.ReadAllLines(file).ToList();
        }

        public static List<PlayerModel> ConvertToPlayerModels(this List<string> lines)
        {
            List<PlayerModel> output = new List<PlayerModel>();

            foreach (string line in lines)
            {
                string[] cols = line.Split(',');

                PlayerModel p = new PlayerModel();
                p.Id = int.Parse(cols[0]);
                p.Username = cols[1];
                p.Health = int.Parse(cols[2]);
                output.Add(p);
            }

            return output;
        }

        public static void SaveToPlayerFile(this List<PlayerModel> models)
        {
            List<string> lines = new List<string>();

            foreach (PlayerModel p in models)
            {
                lines.Add($"{p.Id},{p.Username},{p.Health}");
            }

            File.WriteAllLines(GlobalConfig.PlayerFile.FullFilePath(), lines);
        }
    }
}
