using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FileSharing.Models;
using Microsoft.AspNetCore.Http;

namespace FileSharing.Controllers
{
    public class HomeController : Controller
    {
        public ViewResult Index()
        {
            return View("Index");
        }

        [HttpPost("Home")]
        public IActionResult LoadFile([FromForm]IFormFile file)
        {
            return View("FileLoaded", file);
        }
    }
}
