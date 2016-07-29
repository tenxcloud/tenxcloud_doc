# 应用管理（跨云模式，以集群tenx-host为例）
对于跨云模式的集群来说，管理应用的方式和在公有云（北京一区、二区）上基本一致。
## 查看和访问应用
1. 查看应用列表。进入“容器”面板，选中自己的主机集群，可以看到运行中的应用。  
![host1](/doc/v1/images/host/deploy-app-0-tenx-host.png)
2. 查看服务地址。如果服务地址个数为1，会直接显示出来；如果大于1，会显示“查看所有服务地址”，点击进入。  
![host1](/doc/v1/images/host/deploy-app-1-tenx-host.png)
3. 访问应用。本例中，helloworld是一个http应用，点击地址既可以访问。这里我添加的是笔记本上的虚拟机，网络类型为NAT，所以只能通过内网地址访问。  
![host1](/doc/v1/images/host/deploy-app-2-tenx-host.png)
## 创建应用
1. 点击"+添加"按钮。  
![host1](/doc/v1/images/host/deploy-app-tenx-host-create-1.png)
2. 搜索要使用的镜像（以hello-world为例）。  
![host1](/doc/v1/images/host/deploy-app-tenx-host-create-2.png)
3. 设置容器名字，以及将容器创建到哪个集群中（默认为当前集群）。  
![host1](/doc/v1/images/host/deploy-app-tenx-host-create-3.png)
4. 设置容器的宿主机和服务地址的节点。"宿主主机"默认不指定，一旦为容器设置宿主机，当宿主机宕机时，服务将无法访问；"服务出口"默认为every node，即每个节点创建的服务通过每个节点都能够访问（Kubernetes中为NodePort）。  
![host1](/doc/v1/images/host/deploy-app-tenx-host-create-4.png)
5. 点击"创建"。点击之后，页面会自动跳转到容器列表。容器创建会需要一段时间（主要是Pull镜像），如果一直不是"运行中"，可以查看容器的日志和事件，有问题可以发工单联系我们。
## 删除应用
![host1](/doc/v1/images/host/deploy-app-tenx-host-create-5.png)

注意：处于负载均衡的考虑，容器会随机分配到一台“已就绪”的主机上。如果没有“已就绪”主机，容器将创建失败。另外如果您的主机设置了防火墙，则需要暴露出容器的端口，否则将无法访问容器。