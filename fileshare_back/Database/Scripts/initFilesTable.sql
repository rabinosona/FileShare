CREATE TABLE [dbo].[Files]
(
	[Id] INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	[Filename] VARCHAR(255) NOT NULL,
	[FileDescription] VARCHAR(1024),
	[FilePath] VARCHAR(1024) NOT NULL,
	[FileSize] bigint NOT NULL,
)		