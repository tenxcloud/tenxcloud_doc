# 添加主机 (跨云模式：Master位于时速云平台上）
假设您已经创建了一个跨云模式的私有集群（蓝色）。添加主机的具体步骤如下：

1.进入要添加主机的集群，点击“添加”  
![host1](/doc/v1/images/host/add-host-0-tenx-host.png)

2.生成安装命令，点击文字右边图标复制文本。**此命令默认使用eth0网卡，如果您使用其他网卡，可在后面加上网卡名字。如：`curl -Ls archive.tenxcloud.com | sudo -H sh -s xxxx eth1`**  
![host1](/doc/v1/images/host/add-host-1-tenx-host.png)

3.ssh登陆要添加的主机，将安装命令粘贴到 shell中  
![host1](/doc/v1/images/host/add-host-2-tenx-host.png)

4.执行结果（本例中的机器已经安装过docker，添加成功）。添加成功以后，控制台会打印"Finished installing TenxCloud Agent, You can deploy containers on this machine now.".回到主机界面，可以看到主机的状态为"已就绪"。  
![host1](/doc/v1/images/host/add-host-3-tenx-host.png)

由于本机是NAT网络，因此在主机列表只显示外网地址，进入主机详情页以后，可以查看主机的状态。对于NAT网络的主机，只能访问其内网地址，尤其是创建应用以后。  
![host1](/doc/v1/images/host/add-host-4-tenx-host.png)

### 注意：
  1.**对于内网机器，需要能够访问外网才能添加。** 青云、ucloud、腾讯云等基于SDN网络的机器，如果有公网ip，则直接添加即可；如果没有分配公网ip，则必须自己搭建路由(如何搭建参考 IaaS厂商的文档）。  
  2.**aws、青云、ucloud和腾讯云上的机器默认开启防火墙，需要手动设置防火墙规则。** 添加节点之前，需要开启inbound udp 8285和tcp 10250/16000端口（8285用于集群网络组建，10250用于与集群master通信, 16000用于探测网络状态）。创建容器以后，如果允许外网访问容器，则还需要开启容器应用的对外端口。  
  3.**每次添加机器都需要在控制台生成一个新命令，否则会添加失败**  
  4.**允许把一台主机添加到多个集群中，以最后添加的集群为准，其他集群中该主机的状态均为"未就绪"**  
  5.**tenx-agent是一个守护进程，可以通过执行"service tenx-agent stop"来断开与集群的连接。** tenx-agent终止后，docker进程也会终止，可以通过"service docker start"重新运行docker