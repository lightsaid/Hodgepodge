# 搭建私有 NPM

## 环境 Window 和 Ubuntu
-- 使用虚拟机搭建Ubuntu环境，简单直接方便

### 使用 verdaccio 创建 npm 服务
[文档](https://verdaccio.org/zh-cn/)

- 安装 npm install --global verdaccio

- 启动 verdaccio
此时通过 http://localhost:4873/ 可访问站点，这就是一个私有 npm 站点了。

- 但是在 window 却无法通过访问，启动时也没有显示可通过 ip 访问的地址
由经验所得，必须有个配置同时支持域名ipv4、ipv6的配置（0.0.0.0：4873）

- 修改 `~/.config/verdaccio/config.yaml 配置文件`
官网给的路径不一定正确，通过命令查找一下 `cd ~/ && find -name verdaccio`
> 不修改配置也行，每次执行命令：`verdaccio --listen 0.0.0.0:4873 --config ~/.config/verdaccio/config.yaml`,同样可以通过ip访问

-修改配置
[参考](https://verdaccio.org/zh-CN/docs/configuration)
sudo vim ~/.config/verdaccio/config.yaml
````text
# 里面一大堆配置，先配置这个
listen: 0.0.0.0:4873
```
- 重启 verdaccio 就可以通过ip访问了

## 注册、登录、发布

- 登记一下 npm 地址：
 npm set registry http://192.168.133.168:4873

- 添加用户：
npm adduser --registry http://192.168.133.168:4873

然后输入账号，密码、邮箱

- 访问站点登录
http://192.168.133.168:4873/
果真能登录，木有问题，太好了

- 编写组件和发布

- 配置 package.json
```json
 "private": false, // 不许设置为fals
 "files": [ //  设置要上传到npm库的文件目录
    "dist"
  ],
```
-- 发布
npm publish --registry http://192.168.133.168:4873/

-- 问题 err 没有 package.json 没有 main 配置项、或者路径不对
-- 每次发布需要修改版本号
-- 修改 registry 注意安装问题
