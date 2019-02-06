using FileShare.DAL;
using FileShare.Services.Configuration;
using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace FileShare.BusinessLogic
{
    public class FileBl : IFileBl
    {
        IFileRepository _fileRepository;
        public FileBl(IFileRepository fileRepository)
        {
            _fileRepository = fileRepository;
        }

        public async Task UploadAsync(IFormFile file)
        {
            var filePath = await SaveFileInStorage(file);

            await _fileRepository.InsertFileInfoAsync(new Models.FileInfoModel
            {
                FileName = file.FileName,
                FileSize = file.Length,
                FilePath = filePath
            });
        }

        private async Task<string> SaveFileInStorage(IFormFile file)
        {
            var fileStoragePath = new ConfigStorage().ObtainConfiguration(Data.ConfigType.AppConfig).ObtainConfigurationProperty("fileStoragePath");
            Directory.CreateDirectory(fileStoragePath);

            var filePath = fileStoragePath + GenerateRandomFileName(file.FileName, fileStoragePath);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                using (var fileStream = file.OpenReadStream())
                {
                    await fileStream.CopyToAsync(stream);
                }
            }

            return filePath;
        }

        private string GenerateRandomFileName(string filename, string fileStoragePath)
        {
            var randomName = Path.GetFileNameWithoutExtension(filename) + $"_{RandomString(8)}" + Path.GetExtension(filename);

            if (File.Exists(fileStoragePath + randomName)) randomName = GenerateRandomFileName(filename, fileStoragePath);

            return randomName;
        }

        private string RandomString(int length)
        {
            var random = new Random();

            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}
