## 如何设置防火墙规则

由于aws, 青云和ucloud上的机器默认开启防火墙，通常会屏蔽掉 22/80之外的tcp端口和所有udp端口，导致无法访问私有集群中的容器。这里分别针对 aws, 青云, ucloud，来说明如何开启主机管理的防火墙端口。
##### 注：主机管理需要开启 udp 8285和 tcp 10250，以及容器映射到主机上的端口（一般在40000以上）
#### 1. Amazon Web Service. AWS上的机器默认不允许外网访问。下面按步骤说明如何查看和修改主机的防火墙规则
 * __登陆aws官网([国际版](http://aws.amazon.com/cn "aws国际版")/[中国版](http://www.amazonaws.cn/ "aws中国版"))。__ 点击"服务"->"计算"->"ec2", 进入ec2控制面板
 
![host1](/doc/v1/images/host/aws/aws-firewall-1.png)
 * __查看运行实例（主机）。__点击"[n]个正在运行的实例"查看当前区域内运行的主机（图中为 us-west-2 俄勒冈）。安全组是设置的防火墙规则，亚马逊会创建一个默认的防火墙组"default"。
 
![host1](/doc/v1/images/host/aws/aws-firewall-2.png)
 * __查看运行实例（主机）信息。__选中运行中的实例，可以看到其ID、内外网地址和域名、IAM角色、访问密钥对、防火墙规则等信息。图中主机采用的是default防火墙
 
![host1](/doc/v1/images/host/aws/aws-firewall-3.png)
 * __查看并编辑防火墙。__点击"查看规则"左边的"default"（或者自定义的防火墙），查看其规则。"入站(inbound)"指定了外界访问该主机的规则，默认禁止; "出站(outbound)"指定了该主机访问外界Internet的规则，默认允许访问所有。
 
![host1](/doc/v1/images/host/aws/aws-firewall-4.png)
 * __编辑"入站(inbound)"规则。点击"编辑"->"添加规则"。__每条规则有四个字段。"类型"包括tcp、udp、icmp等几大类。ssh对应tcp 22，http对应tcp 80，dns对应udp 53。开通icmp才能对主机进行ping和traceroute操作。"来源"包括任意ip(0.0.0.0/0)、我的ip(检测当前您登陆aws主站的机器出口ip）和自定义ip(指定一个内网/外网网段)
 
![host1](/doc/v1/images/host/aws/aws-firewall-5.png)
 * __添加"主机管理"所需规则。__主机管理需要 udp 8285(任意ip), tcp 10250(任意ip)和容器端口（tcp 40000以上，任意ip）。为了便于ssh登陆，这里放开了 tcp 22。
 
![host1](/doc/v1/images/host/aws/aws-firewall-6.png)
 * __检查防火墙规则。__
 
![host1](/doc/v1/images/host/aws/aws-firewall-7.png)

#### 2. 青云. 