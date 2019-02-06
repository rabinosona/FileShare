using FileShare.DAL.EntityContext;
using FileShare.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace FileShare.DAL
{
    public class FileRepository : IFileRepository
    {
        private readonly FileInfoContext _fileContext;

        public FileRepository(FileInfoContext fileContext)
        {
            _fileContext = fileContext;
        }

        public async Task InsertFileInfoAsync(FileInfoModel model)
        {
            await _fileContext.AddAsync(model);

            await _fileContext.SaveChangesAsync();
        }
    }
}
