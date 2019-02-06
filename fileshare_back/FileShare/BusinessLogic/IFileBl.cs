using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FileShare.BusinessLogic
{
    public interface IFileBl
    {
        Task UploadAsync(IFormFile file);
    }
}
