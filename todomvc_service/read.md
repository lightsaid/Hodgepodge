
# todomvc api

## Install
首先硬件搭建 sqlite3、nodejs 环境，都相对简单。

``` sh
# 创建数据库
sqlite3 todo.db

# 执行脚本生成表
.read db.sql 

# 安装项目依赖
npm i

# running
node app.js
```
## 访问接口
- /api/user/register | login
- /api/todo/created | list | update | status | deleted