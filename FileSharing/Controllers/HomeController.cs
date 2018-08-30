﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FileSharing.Models;

namespace FileSharing.Controllers
{
    public class HomeController : Controller
    {
        public ViewResult Index()
        {
            return View("Index");
        }

        public ViewResult LoadFile()
        {
            return View("FileLoaded");
        }
    }
}
