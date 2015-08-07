## 如何设置防火墙规则

由于aws, 青云和ucloud等IaaS平台上的机器默认开启防火墙，通常会屏蔽掉 22/80之外的tcp端口和所有udp端口，导致无法访问私有集群中的容器。这里以aws、青云和ucloud为例，分别介绍如何设置防火墙。
##### 注：主机管理需要开启 udp 8285和 tcp 10250，以及容器映射到主机上的端口（tcp 40000+）
##### 1. AWS. 点击查看 [如何设置"入站(inbound)"防火墙规则](http://docs.amazonaws.cn/AWSEC2/latest/UserGuide/using-network-security.html#adding-security-group-rule "设置防火墙规则")。设置成功以后，防火墙规则如下

![host1](/doc/v1/images/host/aws/aws-firewall-7.png)

##### 2. 青云. 进入主站以后，点击"安全"->"防火墙"->选择防火墙->添加"下行规则"。添加成功以后，必须点击"应用修改"才能生效。添加成功以后，防火墙显示如下

![host1](/doc/v1/images/host/aws/qingcloud-firewall-1.png)

##### 3. UCloud. 进入主站以后，可以看到"防火墙"选项，创建防火墙或者编辑已有的防火墙即可。创建成功以后，防火墙如下

![host1](/doc/v1/images/host/aws/ucloud-firewall-1.png)