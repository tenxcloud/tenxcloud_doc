# 创建第一个Hello World服务

创建一个服务只需要下面几个简单步骤：

1. 进入 “容器服务” -> “服务” 页面，点击 “创建” 按钮:

 ![create1](/doc/v1/images/container/create_container_1.png)

2. 在新的页面中选择镜像，可以按照分类查看可用镜像。这里在搜索框中输入“hello-world”并点击“搜索”，在结果中找到“tenxcloud/hello-world”并点击“部署”按钮。

 ![create2](/doc/v1/images/container/create_container_2.png)

3. 在新的页面中输入服务名称，如“hello-world”。点击“创建”按钮。

 ![create3](/doc/v1/images/container/create_container_3.png)


4. 此时会跳转回到容器服务列表，可以看到有一个正在创建的容器服务。通过刷新按钮查看容器应用的最新状态，待状态变为“运行中”后，便可以通过“服务地址”访问容器的服务接口了。

 ![create4](/doc/v1/images/container/create_container_4.png)

