using FileShare.BusinessLogic;
using FileShare.Services;
using FileShare.Services.Configuration;
using Microsoft.AspNetCore.Cors;
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
        private readonly IFileBl _fileBl;

        public FileUploadController(IFileBl fileBl)
        {
            _fileBl = fileBl;
        }

        [Route("uploadFile")]
        [HttpPost]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            try
            {
                await _fileBl.UploadAsync(file);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Error while processing file.");
            }
        }
    }
}
