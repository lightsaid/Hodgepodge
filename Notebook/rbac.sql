USE [STERP]
GO

/****** Object:  Table [dbo].[Sys_User]    Script Date: 2021/10/11 11:54:48 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Sys_User](
	[Id] [bigint] NOT NULL,
	[TimeCreated] [datetime] NOT NULL,
	[UserIdCreated] [nvarchar](20) NOT NULL,
	[TimeLastMod] [datetime] NOT NULL,
	[UserIdLastMod] [nvarchar](20) NOT NULL,
	[Version] [nvarchar](36) NOT NULL,
	[LoginName] [nvarchar](32) NOT NULL,
	[DisplayName] [nvarchar](32) NOT NULL,
	[Password] [nvarchar](216) NOT NULL,
	[Avatar] [nvarchar](512) NULL,
	[UserType] [int] NOT NULL,
	[Status] [int] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[EmailAddress] [nvarchar](50) NULL,
	[ClientId] [bigint] NOT NULL,
 CONSTRAINT [PK_Sys_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [IX_Sys_User_LoginName] UNIQUE NONCLUSTERED 
(
	[LoginName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Sys_User] ADD  DEFAULT ((0)) FOR [ClientId]
GO


USE [STERP]
GO

/****** Object:  Table [dbo].[Sys_Role]    Script Date: 2021/10/11 11:58:02 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Sys_Role](
	[Id] [bigint] NOT NULL,
	[TimeCreated] [datetime] NOT NULL,
	[UserIdCreated] [nvarchar](20) NOT NULL,
	[TimeLastMod] [datetime] NOT NULL,
	[UserIdLastMod] [nvarchar](20) NOT NULL,
	[Version] [nvarchar](36) NOT NULL,
	[Name] [nvarchar](24) NOT NULL,
	[Description] [nvarchar](100) NULL,
	[Status] [int] NOT NULL,
	[IsBuiltin] [int] NOT NULL,
	[ActionCode] [nvarchar](32) NOT NULL,
	[ClientId] [bigint] NOT NULL,
 CONSTRAINT [PK_Sys_Role] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Sys_Role] ADD  DEFAULT ((0)) FOR [ClientId]
GO



USE [STERP]
GO

/****** Object:  Table [dbo].[Sys_Permission]    Script Date: 2021/10/11 11:59:48 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Sys_Permission](
	[Id] [bigint] NOT NULL,
	[TimeCreated] [datetime] NOT NULL,
	[UserIdCreated] [nvarchar](20) NOT NULL,
	[TimeLastMod] [datetime] NOT NULL,
	[UserIdLastMod] [nvarchar](20) NOT NULL,
	[Version] [nvarchar](36) NOT NULL,
	[MenuId] [bigint] NULL,
	[Name] [nvarchar](200) NOT NULL,
	[ActionCode] [nvarchar](200) NOT NULL,
	[Description] [nvarchar](200) NULL,
	[Status] [int] NOT NULL,
	[Type] [int] NOT NULL,
	[ParentId] [bigint] NULL,
	[ClientId] [bigint] NOT NULL,
 CONSTRAINT [PK_Sys_Permission] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Sys_Permission] ADD  DEFAULT ((0)) FOR [ClientId]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'父Id' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Sys_Permission', @level2type=N'COLUMN',@level2name=N'ParentId'
GO


USE [STERP]
GO

/****** Object:  Table [dbo].[Sys_UserRoleMapping]    Script Date: 2021/10/11 12:01:51 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Sys_UserRoleMapping](
	[Id] [bigint] NOT NULL,
	[TimeCreated] [datetime] NOT NULL,
	[UserIdCreated] [nvarchar](20) NOT NULL,
	[TimeLastMod] [datetime] NOT NULL,
	[UserIdLastMod] [nvarchar](20) NOT NULL,
	[Version] [nvarchar](36) NOT NULL,
	[UserId] [bigint] NOT NULL,
	[RoleId] [bigint] NOT NULL,
	[ClientId] [bigint] NOT NULL,
 CONSTRAINT [PK_Sys_UserRoleMapping] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Sys_UserRoleMapping] ADD  DEFAULT ((0)) FOR [ClientId]
GO


USE [STERP]
GO

/****** Object:  Table [dbo].[Sys_RolePermissionMapping]    Script Date: 2021/10/11 12:02:08 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Sys_RolePermissionMapping](
	[Id] [bigint] NOT NULL,
	[TimeCreated] [datetime] NOT NULL,
	[UserIdCreated] [nvarchar](20) NOT NULL,
	[TimeLastMod] [datetime] NOT NULL,
	[UserIdLastMod] [nvarchar](20) NOT NULL,
	[Version] [nvarchar](36) NOT NULL,
	[RoleId] [bigint] NOT NULL,
	[PermissionId] [bigint] NOT NULL,
	[ClientId] [bigint] NOT NULL,
 CONSTRAINT [PK_Sys_RolePermissionMapping] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Sys_RolePermissionMapping] ADD  DEFAULT ((0)) FOR [ClientId]
GO


