
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



-- 创建表
CREATE TABLE users(
   id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
   username VARCHAR(24) NOT NULL,
   `password` VARCHAR(32) NOT NULL,
   isVendor CHAR(0) DEFAULT 'N' -- Y: 供应商，N：消费者
   avatar VARCHAR(255) NULL,
   UNIQUE (username)
);

-- 商品 product
CREATE TABLE product(
   id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
   userId INTEGER NOT NULL, -- 发布者
   productName VARCHAR(100) NOT NULL,
   productImgUrl VARCHAR(255) NOT NULL,
   productPrice DECIMAL(8,2) NOT NULL,
   productParma TEXT NULL,  -- 配菜、小菜 （JSON格式）
   onSale CHAR(0) DEFAULT 'Y' -- Y: 在售，N：不再售
   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY(userId) REFERENCES users(id),
   UNIQUE (productName)
)

-- 订单   
CREATE TABLE order(
   id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
   userId INTEGER NOT NULL,
   totalPrice DECIMAL(8,2) NOT NULL,
   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   deleted CHAR(0) DEFAULT 'N', -- N: 正常  Y：已删除
   FOREIGN KEY(userId) REFERENCES users(id)
)

-- 订单明细
CREATE TABLE orderItem(
   id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
   orderId INTEGER NOT NULL,
   productName VARCHAR(100) NOT NULL,
   productImgUrl VARCHAR(255) NOT NULL,
   productPrice DECIMAL(8,2) NOT NULL,
   productParma TEXT NULL,  -- 配菜、小菜 （JSON格式）
   quantity INTEGER NOT NULL, -- 数量
   FOREIGN KEY(orderId) REFERENCES order(id)
)

-- 购物车 cart
CREATE TABLE shoppingCart(
   id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
   userId INTEGER NOT NULL, -- 发布者
   productId INTEGER NOT NULL, 
   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

-- 推荐 recommend
CREATE TABLE recommend(
   id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
   userId INTEGER NOT NULL,
   productId INTEGER NOT NULL,
   productImgUrl VARCHAR(255) NULL,
   recommendUrl VARCHAR(255) NULL,
   link VARCHAR(255) NULL,
   FOREIGN KEY(userId) REFERENCES users(id),
   FOREIGN KEY(productId) REFERENCES product(id)
)



