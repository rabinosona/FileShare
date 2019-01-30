CREATE TABLE [dbo].[File]
(
	[Id] INT NOT NULL PRIMARY KEY,
	[Filename] VARCHAR(255) NOT NULL,
	[FileDescription] VARCHAR(1024) NOT NULL,
	[FilePath] VARCHAR(1024) NOT NULL,
	[FileSize] bigint NOT NULL,
)
