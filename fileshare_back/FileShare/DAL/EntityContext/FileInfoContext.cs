using FileShare.Models;
using Microsoft.EntityFrameworkCore;

namespace FileShare.DAL.EntityContext
{
    public class FileInfoContext : DbContext
    {
        public FileInfoContext() : base()
        {

        }

        public DbSet<FileInfoModel> Files { get; set; }
    }
}
