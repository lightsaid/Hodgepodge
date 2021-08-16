
/*

-- 执行 .sql 文件
.read db.sql 

-- 创建数据库
sqlite3 todo.db

-- 查看所有的库
.databases

-- 查看table
.tables

-- 退出命令
.quit

*/

-- 创建表
CREATE TABLE users(
   id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
   username VARCHAR(24) NOT NULL,
   `password` VARCHAR(32) NOT NULL,
   avatar VARCHAR(255) NULL,
   UNIQUE (username)
);

CREATE TABLE items(
   id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
   userId INTEGER NOT NULL,
   content TEXT NOT NULL,
   `status` CHAR(1) DEFAULT 0, -- 0: 激活  1：完成
   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   deleted CHAR(0) DEFAULT 0, -- 0: 不删除  1：删除
   FOREIGN KEY(userId) REFERENCES users(id)
);



