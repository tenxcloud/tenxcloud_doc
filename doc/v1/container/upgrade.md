# 灰度升级

灰度升级可以对已创建的容器服务进行镜像版本升级。使用的镜像需要有多个版本才能进行灰度升级。

1. 选择“tenxcloud/ubuntu”镜像创建一个容器服务。

 ![upgrade1](/doc/v1/images/container/upgrade_1.png)

2. 在“容器配置”页面中选择“镜像版本”为“12.04”并创建镜像。

 ![upgrade2](/doc/v1/images/container/upgrade_2.png)

3. 创建后，在容器服务列表页面点击刚创建的容器名称进入服务详情页面。在“基本信息”中可以看到镜像版本为12.04。为了进一步验证，我们打开一个控制台登录到容器中。

 ![upgrade3](/doc/v1/images/container/upgrade_3.png)

4. 在控制台中输入“cat /etc/issue”，验证版本信息。

 ![upgrade4](/doc/v1/images/container/upgrade_4.png)

5. 关闭控制台，回到容器服务列表页面。勾选容器服务并点击“灰度升级”按钮。

 ![upgrade5](/doc/v1/images/container/upgrade_5.png)

6. 在弹出框中选择“目标版本”为“latest”并输入更新间隔，点击“保存”按钮。

 ![upgrade6](/doc/v1/images/container/upgrade_6.png)

7. 几秒钟之后会看到升级的服务将创建新的容器，再过几秒钟新的容器运行后将取代旧容器。

 ![upgrade7-1](/doc/v1/images/container/upgrade_7-1.png)
 
 ![upgrade7-2](/doc/v1/images/container/upgrade_7-2.png)

8. 进入服务详情页面，可以看到镜像名称变为了“tenxcloud/ubuntu:latest”。

 ![upgrade8](/doc/v1/images/container/upgrade_8.png)

9. 打开控制台，查看系统版本信息可以看到版本变成了14.04

 ![upgrade9](/doc/v1/images/container/upgrade_9.png)
