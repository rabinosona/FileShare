using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FileShare.Models
{
    public class FileInfoModel
    {
        /// <summary>
        /// File id.
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Name of the file.
        /// </summary>
	    public string FileName { get; set; }
        /// <summary>
        /// Description of the file.
        /// </summary>
        public string FileDescription { get; set; }
        /// <summary>
        /// Path to the file on the local storage.
        /// </summary>
        public string FilePath { get; set; }
        /// <summary>
        /// Size of file (bytes)
        /// </summary>
        public long FileSize { get; set; }
    }
}
