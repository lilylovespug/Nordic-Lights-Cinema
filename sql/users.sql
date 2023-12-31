USE [master]
GO
/****** Object:  Database [NLC_Users]    Script Date: 12/10/2023 9:21:13 AM ******/
CREATE DATABASE [NLC_Users]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'NLC_Users', FILENAME = N'/var/opt/mssql/data/NLC_Users.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'NLC_Users_log', FILENAME = N'/var/opt/mssql/data/NLC_Users_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [NLC_Users] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [NLC_Users].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [NLC_Users] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [NLC_Users] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [NLC_Users] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [NLC_Users] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [NLC_Users] SET ARITHABORT OFF 
GO
ALTER DATABASE [NLC_Users] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [NLC_Users] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [NLC_Users] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [NLC_Users] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [NLC_Users] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [NLC_Users] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [NLC_Users] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [NLC_Users] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [NLC_Users] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [NLC_Users] SET  DISABLE_BROKER 
GO
ALTER DATABASE [NLC_Users] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [NLC_Users] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [NLC_Users] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [NLC_Users] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [NLC_Users] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [NLC_Users] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [NLC_Users] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [NLC_Users] SET RECOVERY FULL 
GO
ALTER DATABASE [NLC_Users] SET  MULTI_USER 
GO
ALTER DATABASE [NLC_Users] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [NLC_Users] SET DB_CHAINING OFF 
GO
ALTER DATABASE [NLC_Users] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [NLC_Users] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [NLC_Users] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [NLC_Users] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [NLC_Users] SET QUERY_STORE = ON
GO
ALTER DATABASE [NLC_Users] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [NLC_Users]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 12/10/2023 9:21:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](50) NOT NULL,
	[Password] [varchar](50) NOT NULL,
	[Name] [nvarchar](50) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [NLC_Users] SET  READ_WRITE 
GO
