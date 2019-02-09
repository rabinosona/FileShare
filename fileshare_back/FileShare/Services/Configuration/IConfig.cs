using FileShare.Data;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace FileShare.Services.Configuration
{
    interface IConfig
    {
        string ObtainConfigurationProperty(string property);
    }

    class AppConfig : IConfig
    {
        private static JObject ConfigurationJson { get; set; }

        public AppConfig(JObject config)
        {
            ConfigurationJson = config;
        }

        public string ObtainConfigurationProperty(string property)
        {
            var value = ConfigurationJson?[property];

            if (value != null) return value.Value<string>();

            throw new ArgumentNullException("The configuration value is null.");
        }
    }
}
