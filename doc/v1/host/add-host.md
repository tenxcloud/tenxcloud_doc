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
1. 目前暂不支持添加基于SDN网络的主机和内网主机。
2. 如果您在机器上已经安装docker 1.5+, 脚本会跳过安装
3. 添加不同的主机需要使用不同的 命令，否则会添加失败
4. 允许把一台主机添加到多个集群中，以最后添加的集群为准，其他集群中该主机的状态均为"不可用"
