# 添加一个主机
进入时速云的“主机管理”页面，可以看到我们的服务运行在“北京1区”的默认集群上，用户的容器服务都是部署和运行在这个默认集群上。如果用户打算新建自己的私有集群，可以点击“新建集群”创建自己的私有集群；集群创建完成后，点击进入集群管理页面，通过“添加”按钮打开一个弹出窗口（如图13），复制窗口上提示的命令并在需要添加的节点上分别运行该命令。具体步骤如下：
1. 进入要添加主机的集群，点击“添加”
![host1](/doc/v1/images/host/add-host-0.png)
2. 生成安装命令，点击文字右边图标复制文本
![host1](/doc/v1/images/host/add-host-1.png)
3. ssh登陆要添加的主机，将安装命令粘贴到 shell中
![host1](/doc/v1/images/host/add-host-2.png)
4. 执行结果（本例中的机器已经安装过docker，添加成功）。添加成功以后，控制台会打印"Finished installing TenxCloud Agent, You can deploy containers on this machine now.".回到主机界面，可以看到主机的状态为"可用"
![host1](/doc/v1/images/host/add-host-3.png)
![host1](/doc/v1/images/host/add-host-4.png)

注意：
1、目前暂不支持添加内网主机，比如笔记本上安装的虚拟机。<br />
2、aws和青云主机默认开启防火墙，添加以后，需要开启inbound udp 8285端口。创建容器后，需要开放 inbound tcp 容器端口。<br />
在本例中，ubuntu container在主机52.10.36.208上的对外端口是49436，ssh对应的传输层协议是tcp<br />
![host1](/doc/v1/images/host/add-host-5.png)
![host1](/doc/v1/images/host/add-host-6.png)
如果想偷懒的话，可以开放一个网段, 比如 40000-49999<br />
![host1](/doc/v1/images/host/add-host-7.png)
3、如果您在机器上已经安装docker 1.5+, 脚本会跳过安装<br />
4、添加不同的主机需要使用不同的 命令，否则会添加失败<br />
5、允许把一台主机添加到多个集群中，以最后添加的集群为准，其他集群中该主机的状态均为"不可用"<br />
6、tenx-agent是一个守护进程，可以通过执行"service tenx-agent stop"来断开与集群的连接。tenx-agent终止后，docker进程也会终止，可以通过"service docker start"重新运行docker <br />
7、目前支持的添加阿里云、青云、美团云、AWS上的主机，