using System;
using Microsoft.AspNetCore.Http;

namespace FileSharing.Models
{
    public class FileModel
    {
        /// <summary>
        /// A name of the file.
        /// </summary>
        /// <value>The name of the file.</value>
        public string FileName { get; set; }
        /// <summary>
        /// A size of the file.
        /// </summary>
        /// <value>The size of the file.</value>
        public string FileSize { get; set; }
        /// <summary>
        /// A byte array which contains bytes of which the file consists.
        /// </summary>
        /// <value>The file contents.</value>
        public byte[] FileContents { get; set; }
        /// <summary>
        /// To load the file we have to catch it from the input form on our page.
        /// We can work with the result of our choice in this form via IFormFile
        /// so we would have to expose it and load its stream contents to the FileContents.
        /// </summary>
        /// <value>The uploaded file.</value>
        public IFormFile UploadedFile { get; set; }
    }
}
