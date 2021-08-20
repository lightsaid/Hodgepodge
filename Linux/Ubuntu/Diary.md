
# Ubuntu 使用日记

## 常用命令
【参考】(https://www.linuxcool.com)

### ps
[参考](https://www.linuxcool.com/ps)
-- ps -aux  或者 ps -A  查看所有进程
-- ps -ef | grep ssh  查看指定进程信息

### ip 
-- ip a 查看网卡名字
-- ifconfig -a 也可以的


## 解疑 | 叙述

### ifconfig 没有显示ip
- 方式1：
执行命令：sudo dhclient ens33 (ens33相对应你的网卡,我的是ens33)，成功获得到ip地址
> dhclient命令的作用是：使用动态主机配置协议动态的配置网络接口的网络参数，也支持BOOTP协议。
> 【参考】(https://www.linuxcool.com/dhclient)

- 但是这样每次重启系统之后，使用ifconfig命令又看不到IP地址了，又要使用 dhclient ens33 命令重新分配，很麻烦。因此，编辑下面文件
vim /etc/sysconfig/network-scripts/ifcfg-eth0
设置 ONBOOT 为 yes
重新启动网络 service network restart


### 配置 ssh 密码登录和免密登录
- 1. ps -ef | grep ssh 查看是否有 sshd 服务，如果有跳过下面步骤 2;
- 2. 安装 ssh 服务 sudo apt-get install openssh-server 
- 3. 配置 ssh_config 或者 sshd_config (两者有导入依赖关系)
- sudo vim /etc/ssh/ssh_config
```txt
...
Port 22
PasswordAuthentication yes
PermitLocalCommand yes
...

```
密码登录完成

4. 客户端使用 ssh-keygen 生成公钥、私钥，然后把公钥copy到服务端（linux）authorized_keys 授权列表中
使用 ssh-copy-id 命令，如果服务端没有 authorized_keys, ssh-copy-id 是会生成的
执行命令 ssh-copy-id xzz@192.168.133.139

5. 免密登录口令 ssh xzz@192.168.133.139


### 上不了网
- 虚拟网络采用 MAT 模式
- 在虚拟机 "编辑-虚拟网络编辑" 查找到 子网IP、网关IP

- 添加配置

```` text
network:
  version: 2
  renderer: NetworkManager
  ethernets:
	ens33:   #配置的网卡名称
	      dhcp4: no    #dhcp4关闭 配置 no 或 false
	      dhcp6: no    #dhcp6关闭 配置 no 或 false
	      addresses: [192.168.133.168/24]   #设置本机IP及掩码
	      gateway4: 192.168.147.1   #设置网关
	      nameservers:
	          addresses: [8.8.8.8,8.8.4.4]   #设置DNS

```
- 应用配置 sudo netplan apply