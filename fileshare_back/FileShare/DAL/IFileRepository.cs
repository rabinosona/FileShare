using FileShare.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FileShare.DAL
{
    public interface IFileRepository
    {
        void InsertFileInfo(FileInfoModel model);
    }
}
