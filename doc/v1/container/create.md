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

# 定制执行命令

在容器配置页面，我们可以自定义执行命令，从而改变容器启动后的执行指令。下面我们将基于ubuntu镜像来创建一个新镜像，并在其中定义一个可执行脚本。然后使用新的镜像构建容器服务，并执行这个新建的脚本。

1. 打开命令行工具，执行以下命令拉取ubuntu镜像，并运行一个容器。

```
sudo docker pull index.tenxcloud.com/tenxcloud/ubuntu

sudo docker run -ti index.tenxcloud.com/tenxcloud/ubuntu /bin/bash
```

2. 在容器中创建my-run.sh文件，并添加以下内容。

```
#!/bin/sh

echo this is my-run.sh
echo "========================================"

./run.sh
```

3. 赋予脚本可执行权限并退出容器。

```
chmod 755 my-run.sh

exit
```

4. 创建新镜像，名称为index.tenxcloud.com/<username>/my-ubuntu。

```
sudo docker commit $(docker ps -lq) index.tenxcloud.com/<username>/my-ubuntu
```

5. 执行以下命令检验效果。

```
$ sudo docker run -d index.tenxcloud.com/<username>/my-ubuntu ./my-run.sh

$ sudo docker logs $(docker ps -lq)
this is my-run.sh
===========================
=> Setting a random password to the root user
=> Done!
========================================================================
You can now connect to this Ubuntu container via SSH using:

    ssh -p <port> root@<host>
and enter the root password 'rNwVcky2sC3W' when prompted

Please remember to change the above password as soon as possible!
========================================================================
```

6. 执行以下命令登录时速云镜像仓库并推送新镜像。

```
sudo docker login index.tenxcloud.com

sudo docker push index.tenxcloud.com/tenx_huangxin/my-ubuntu
```

7. 进入时速云控制台，在“镜像仓库” -> “我的镜像”页面中找到my-ubuntu镜像并点击进入详情页面。将镜像解锁，并点击“部署镜像”按钮。

 ![modify_exec_cmd1](/doc/v1/images/container/modify_exec_cmd_1.png)

8. 在“容器配置”页面，如下图所示修改“执行命令”，并点击“创建”按钮。

 ![modify_exec_cmd2](/doc/v1/images/container/modify_exec_cmd_2.png)

9. 返回容器服务列表页面，点击刚创建的服务名称，查看日志信息（如果没有日志可尝试等待一段时间再次刷新）。可以在日志中看到我们之前在my-run.sh脚本中加入的echo内容。

 ![modify_exec_cmd3](/doc/v1/images/container/modify_exec_cmd_3.png)

# 复选框设置说明

在创建hello-world第三步的“容器配置”页面中有“更新镜像”和“与节点同步”两个复选框，其含义如下

* 复选框“更新镜像”用来设置在创建服务时是否拉取最新镜像。首次创建后，镜像会被缓存。未勾选“更新镜像”时，将会优先使用缓存的镜像创建服务。勾选“更新镜像”时，将会拉取最新镜像创建服务。

* 复选框“与节点同步”用来设置容器运行时的时区。未勾选时，容器运行时使用系统默认时区。勾选时，容器运行时使用所在节点时区，如北京节点会将容器设置为东八区。