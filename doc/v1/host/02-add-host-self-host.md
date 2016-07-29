# 添加主机 (普通模式：Master在用户端）
假设您已经创建了一个普通模式的私有集群（紫色）。添加主机的具体步骤如下（以集群self-hosted为例）：

1.进入要添加主机的集群，点击“添加”  
![host1](/doc/v1/images/host/add-host-0.png)  
2.生成安装命令，点击文字右边图标复制文本    
![host1](/doc/v1/images/host/add-host-1.png)  
3.ssh登陆要添加的主机，Shell中执行安装命令。值得注意的是，添加主机时，会从时速云服务器下载守护程序或者docker镜像，如果无法连接到外网或者网速过慢，都将造成添加失败。添加成功以后，控制台会打印"Install Complete, A few minutes later, a kubernetes master/slave node will be started"(本例中的主机上已经安装docker)。  
![host1](/doc/v1/images/host/add-host-2.png)  
4.状态检查。节点需要5min左右才能添加上去。可以通过两种方式检查集群状态：  
  1. 时速云控制台，添加成功以后，显示如下：  
  ![host1](/doc/v1/images/host/add-host-success.png)  
  2. 在master节点上执行"curl localhost:8080/api/v1/nodes"，能够正常访问，并且返回节点信息。

### 注意：
  1. 目前不支持docker 1.10.x，如果节点上已经安装docker 1.10.x，请先卸载docker，再进行添加，否则添加主机操作将失败。
  2. 如果使用同一个token添加两台机器，第二台使用该token的机器会添加失败。
  3. 如果主机节点添加成功以后，网络与外界断开，集群将在本地继续正常运行，但通过时速云控制台将无法访问。
  4. 脚本执行结束以后，后台还需要执行下面的步骤才能真正创建一个master或者node节点，该过程的时间消耗与网速密切相关，但一般情况下5-10min中都可以安装成功：
    1. 拉取镜像，包括hyperkube、tenx-authserver(master节点专属)、flannel、etcd、pause。拉取成功以后，执行"docker images"命令，能够看到如下镜像：  
    ![host1](/doc/v1/images/host/add-host-images.png)  
    2. 运行容器。Master节点上运行apiserver、controller-manager、etcd、flannel、kubelet、tenx-authserver容器:  
    ![host1](/doc/v1/images/host/add-host-containers-master.png)  
    Node节点上运行kubelet、flannel、kube-proxy容器：  
    ![host1](/doc/v1/images/host/add-host-containers-node.png)