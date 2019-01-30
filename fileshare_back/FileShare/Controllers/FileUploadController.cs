using FileShare.Services;
using FileShare.Services.Configuration;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FileShare.Controllers
{   
    [ApiController]
    [Route("api")]
    public class FileUploadController : ControllerBase
    {
        [Route("uploadFile")]
        [HttpPost]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            var config = new ConfigStorage().ObtainConfiguration(Data.ConfigType.AppConfig);
            var connectionString = config.ObtainConfigurationProperty("connectionString");

            return Ok();
        }
    }
}
