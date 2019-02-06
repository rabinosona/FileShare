using FileShare.Models;
using Microsoft.EntityFrameworkCore;

namespace FileShare.DAL.EntityContext
{
    public class FileInfoContext : DbContext
    {
        public FileInfoContext(DbContextOptions<FileInfoContext> options) : base(options)
        {

        }   

        public DbSet<FileInfoModel> Files { get; set; }
    }
}
