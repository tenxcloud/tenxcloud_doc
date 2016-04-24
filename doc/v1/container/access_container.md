# 访问其他内部容器

在容器服务中创建的容器可以通过内部网络互相访问，下面介绍了几种在容器中访问其他容器的方法。

首先我们需要创建两个容器：使用“tenxcloud/ubuntu”镜像创建两个容器，分别命名为demo1和demo2。

 ![access_container1](/doc/v1/images/container/access_container_1.png)

## 通过内网地址

1. 在容器服务列表页面点击demo2，进入服务详情页面。点击“容器实例”Tab，可以看到内网地址。

 ![access_container2](/doc/v1/images/container/access_container_2.png)

2. 回到容器服务列表页面，打开一个demo1的控制台。ping容器demo2的内网地址，可以看到在demo1中能够访问demo2容器。

 ![access_container3](/doc/v1/images/container/access_container_3.png)

## 通过内网域名别名

1. 进入“容器服务” -> “内网域名别名”页面，查看容器的内网域名信息。

 ![access_container4](/doc/v1/images/container/access_container_4.png)

2. 打开一个demo1的控制台。ping容器demo2的内网域名和完整域名，可以看到使用两种方式均能访问demo2。

 ![access_container5](/doc/v1/images/container/access_container_5.png)

## 通过链接服务

在创建容器服务时，我们可以在“高级设置”中设置链接服务访问已有的容器。

1. 使用“tenxcloud/ubuntu”镜像创建demo3，在“容器配置”页面点击“高级设置”按钮。

 ![access_container6](/doc/v1/images/container/access_container_6.png)

2. 在“高级设置”页面添加一个到demo1的链接服务。在“链接服务”中选择demo1，输入框中输入任意内容，并点击“添加”。

 ![access_container7](/doc/v1/images/container/access_container_7.png)

3. 可以在页面中看到刚才添加的链接服务，并且在环境变量列表中新增了若干记录。使用这些环境变量就可以在demo3中访问demo1。

 ![access_container8](/doc/v1/images/container/access_container_8.png)

4. 打开一个demo3的控制台。执行“ping $DEMO1_PORT_22_TCP_ADDR”指令，可以看到在demo3中能够访问demo1。

 ![access_container9](/doc/v1/images/container/access_container_9.png)
