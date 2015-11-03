## 创建第一个Hello World服务
创建一个服务只需要下面几个简单步骤：
1. 进入 “容器” 板块，点击 “创建” 按钮:
 ![create1](/doc/v1/images/container/create_container_1.png)

2. 在弹出的窗口中，可以按照分类查看可用的容器应用，包括热门应用、系统应用、公有和私有应用。选中想要创建的应用后，进入下一步的容器配置页面，选择容器的版本，填写容器应用的名称，选择内存、硬盘等配置信息以及集群的实例数量，点击确认后，容器应用便会开始创建（这里用 tenxcloud/hello-world 为例)。
 ![create2](/doc/v1/images/container/create_container_2.png)

3. 回到容器应用列表，可以看到有一个正在创建的容器服务，可以通过刷新按钮查看容器应用的最新状态，待状态变为“运行中”后，便可以通过“服务地址”访问容器的服务接口了：
 ![create3](/doc/v1/images/container/create_container_3.png)

