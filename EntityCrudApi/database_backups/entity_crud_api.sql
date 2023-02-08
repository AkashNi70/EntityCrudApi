USE [EFCrudApi]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 08-02-2023 19:44:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Courses]    Script Date: 08-02-2023 19:44:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Courses](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CourseName] [nvarchar](max) NOT NULL,
	[CourseDescription] [nvarchar](max) NOT NULL,
	[Price] [float] NOT NULL,
	[Status] [bit] NOT NULL,
	[Created] [datetime2](7) NOT NULL,
	[Updated] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Courses] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ScMappings]    Script Date: 08-02-2023 19:44:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ScMappings](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CourseId] [int] NOT NULL,
	[StudentId] [int] NOT NULL,
 CONSTRAINT [PK_ScMappings] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Students]    Script Date: 08-02-2023 19:44:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Students](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Phone] [nvarchar](max) NOT NULL,
	[FatherName] [nvarchar](max) NOT NULL,
	[FatherPhone] [nvarchar](max) NOT NULL,
	[Status] [bit] NOT NULL,
	[Created] [datetime2](7) NOT NULL,
	[Updated] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Students] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230205135435_IntitMigration', N'7.0.2')
GO
SET IDENTITY_INSERT [dbo].[Courses] ON 
GO
INSERT [dbo].[Courses] ([Id], [CourseName], [CourseDescription], [Price], [Status], [Created], [Updated]) VALUES (1, N'Php', N'Php Development', 5999, 1, CAST(N'2023-02-06T13:50:14.4900000' AS DateTime2), CAST(N'2023-02-06T13:50:14.4900000' AS DateTime2))
GO
INSERT [dbo].[Courses] ([Id], [CourseName], [CourseDescription], [Price], [Status], [Created], [Updated]) VALUES (2, N'Android', N'Android Development', 9999, 1, CAST(N'2023-02-06T13:47:35.5690000' AS DateTime2), CAST(N'2023-02-06T13:47:35.5690000' AS DateTime2))
GO
INSERT [dbo].[Courses] ([Id], [CourseName], [CourseDescription], [Price], [Status], [Created], [Updated]) VALUES (3, N'Java', N'Java Development', 10000, 1, CAST(N'2023-02-07T14:43:43.9980000' AS DateTime2), CAST(N'2023-02-07T14:43:43.9980000' AS DateTime2))
GO
INSERT [dbo].[Courses] ([Id], [CourseName], [CourseDescription], [Price], [Status], [Created], [Updated]) VALUES (4, N'fjbf', N'dsbfj', 2, 0, CAST(N'2023-02-07T15:42:17.0049718' AS DateTime2), CAST(N'2023-02-07T15:42:17.0049726' AS DateTime2))
GO
SET IDENTITY_INSERT [dbo].[Courses] OFF
GO
SET IDENTITY_INSERT [dbo].[ScMappings] ON 
GO
INSERT [dbo].[ScMappings] ([Id], [CourseId], [StudentId]) VALUES (1, 1, 1)
GO
INSERT [dbo].[ScMappings] ([Id], [CourseId], [StudentId]) VALUES (2, 2, 1)
GO
INSERT [dbo].[ScMappings] ([Id], [CourseId], [StudentId]) VALUES (3, 3, 1)
GO
SET IDENTITY_INSERT [dbo].[ScMappings] OFF
GO
SET IDENTITY_INSERT [dbo].[Students] ON 
GO
INSERT [dbo].[Students] ([Id], [Name], [Email], [Phone], [FatherName], [FatherPhone], [Status], [Created], [Updated]) VALUES (1, N'Akash', N'akash@gmail.com', N'7054687468', N'D. Nishad', N'9988776655', 1, CAST(N'2023-02-06T13:58:55.8820000' AS DateTime2), CAST(N'2023-02-06T13:58:55.8820000' AS DateTime2))
GO
SET IDENTITY_INSERT [dbo].[Students] OFF
GO
