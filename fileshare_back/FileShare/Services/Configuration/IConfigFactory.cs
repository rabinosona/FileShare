using FileShare.Data;
using Newtonsoft.Json.Linq;
using System;
using System.IO;

namespace FileShare.Services.Configuration
{
    interface IConfigFactory
    {
        IConfig LoadConfiguration(ConfigType type);
    }

    class AppConfigFactory : IConfigFactory
    {
        public IConfig LoadConfiguration(ConfigType type)
        {
            switch (type)
            {
                case ConfigType.AppConfig:
                    var config = File.ReadAllText(Path.Combine(Environment.CurrentDirectory, "appconfig.json"));

                    return new AppConfig(JObject.Parse(config));
                default:
                    return null;
            }
        }
    }
}
