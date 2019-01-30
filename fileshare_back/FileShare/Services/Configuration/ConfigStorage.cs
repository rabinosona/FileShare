using FileShare.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FileShare.Services.Configuration
{
    class ConfigStorage
    {
        private static List<IConfig> Configurations;

        public ConfigStorage()
        {
            if (Configurations == null) Configurations = new List<IConfig>();
        }

        public IConfig ObtainConfiguration(ConfigType type)
        {
            switch (type)
            {
                case ConfigType.AppConfig:
                    return Configurations.OfType<AppConfig>().First();
                default:
                    return null;
            }
        }

        public void PopulateConfiguration(IConfig config)
        {
            Configurations.Add(config);
        }
    }
}
