# 应用管理（普通模式，以集群self-host为例）
普通模式的集群中，Master节点和Node节点在同一个局域网中，因此用户拥有更大的自由度去管理应用。这里我们推荐三种方法：
1. 通过时速云的控制台，具体参考 [应用管理（跨云模式）](03-deploy-app-tenx-host.md)
![host1](/doc/v1/images/host/deploy-app-self-host-0-container.png)
2. 使用普通集群专属的管理平面。
![host1](/doc/v1/images/host/deploy-app-self-host-1.png)
3. 通过kubectl，该方法适用于对kubernetes有一定使用经验的用户，具体参考[kubectl使用方法](http://kubernetes.io/docs/user-guide/kubectl-overview/)。
4. 使用kubernetes的client library。目前kubernetes client library已经支持多种编程语言，包括go、nodejs等，该方法要求用户对kubernetes有一定的了解和使用经验。

这里我们重点介绍普通集群专属的管理平面。目前，它由主机列表、应用、日志、事件和系统五部分组成。下面我们一一介绍：
### 主机列表
集群中的所有节点，也可以查看主机详情。对于这种类型的集群，不推荐删除Master节点。
![host1](/doc/v1/images/host/deploy-app-self-host-1.png)
### 应用（查看）
该面板展示了所有的控制器（ReplicationController）、服务（Service）和容器仓（Pod）。
  1. 点击倒三角形，可以查看控制器下所有的容器仓。
  ![host1](/doc/v1/images/host/deploy-app-self-host-2.png)
  2. 点击控制器（或服务，或容器仓）的名字，可以查看详情。
  ![host1](/doc/v1/images/host/deploy-app-self-host-2-rc-detail.png)
### 日志
通过该功能，可以查看容器的运行日志（pod级别）。
![host1](/doc/v1/images/host/deploy-app-self-host-2-log.png)
### 事件
目前支持查看Pod的事件。
![host1](/doc/v1/images/host/deploy-app-self-host-2-event.png)
### 系统
该页面列出了支持的插件列表，并支持插件安装。目前支持DNS和日志插件。
![host1](/doc/v1/images/host/deploy-app-self-host-2-plugins.png)