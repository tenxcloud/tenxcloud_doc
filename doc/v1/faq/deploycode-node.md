# 部署 Nodejs 应用

时速云支持两种部署应用代码的方式：
* <strong>1.通过官方提供的“运行时”环境部署代码</strong>
* <strong>2.将应用代码打包成自定义的镜像来发布</strong>

第一种方式的特点是快速方便，可像操作云主机一样部署代码。第二种方式将应用代码直接打包成镜像来发布，这样的好处是应用代码随着镜像一起发布，可以发布成“无状态的服务”，从而提高了应用的部署和运行效率。

### 一、通过“运行时”环境部署代码
1.点击“创建”按钮

![创建服务](/doc/v1/images/faq/deploy-node/create.png)

2.搜索到时速云官方提供的镜像，点击“部署”按钮。此镜像包含了示例代码，并开放了SSH，您可以像操作云主机一样，使用 SSH/Putty或sftp 等工具连接容器，上传自己的应用代码。

![选择镜像](/doc/v1/images/faq/deploy-node/select.png)

3.点击“部署”后，进入到容器基本配置页面，输入“服务名称”，选择“容器配置”（建议512M内存以上），勾选服务类型“有状态服务”，有状态服务支持将外部存储卷挂载在容器上，从而实现数据的持久化。存储卷里的内容通常存储用户的应用代码。默认目录为“/app”

![容器配置](/doc/v1/images/faq/deploy-node/basic.png)

4.如果之前没有创建过存储卷，页面上能直接创建

![创建存储](/doc/v1/images/faq/deploy-node/create_volume.png)

5.在“高级设置”中，可以添加环境变量ROOT_PASS来设置容器的SSH密码（不设置的话会随机生成，从日志中可以查看到），以及其他参数或者端口设置。

![高级设置](/doc/v1/images/faq/deploy-node/advance.png)

6.点击创建后稍等一会，容器便创建成功

![创建成功](/doc/v1/images/faq/deploy-node/running.png)

7.点击“查看所有服务地址”，下面列出了端口和服务地址

![示例的应用](/doc/v1/images/faq/deploy-node/port.png)

8.访问服务地址能看到服务已经开始运行

![服务启动成功](/doc/v1/images/faq/deploy-node/success.png)

9.点击“日志”标签，可以看到服务运行情况和SSH的密码。

![在“日志”里查看生成的密码](/doc/v1/images/faq/deploy-node/passwd.png)

10.上传应用代码至 “/app” 目录下，可使用“scp”命令或sftp工具如filezilla上传。
```
scp <file.zip> -p <port> root@<hostname>:<path>
```
修改/app/app.js后，刷新页面展示如下

![修改成功](/doc/v1/images/faq/deploy-node/change_success.png)

<strong>注意：存储卷挂载的默认目录为“/app”，内含示例代码，除“/app”目录下的内容可以永久存储外，容器其他目录文件只可以临时修改，即容器停止或者重新部署后数据会恢复到修改前的状态。如确有必要修改，请参照官方的“运行时”镜像构建自己定制的镜像。</strong>


### 二、将应用代码打包成自定义的镜像来发布
通过代码构建，可以将应用代码打包成镜像来发布，这样的好处是应用代码随着镜像一起发布，可以发布成“无状态的服务”，从而提高了应用的部署和运行效率，并且可以弹性扩展多个实例，还可以和“持续集成”结合，实现开发、测试、部署、运行、管理的自动化以及快速交付。

请参考 [如何编写Dockerfile](dockerfile.md) 和 [代码构建](../../v1/ci/index.html) 功能，构建成自定义镜像来发布。


