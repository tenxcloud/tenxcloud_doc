# 快速部署Node.js应用

如果您需要快速部署一个Node.js的应用到TenxCloud的容器平台，可以使用如下步骤:

1.首先在你的node.js项目目录中创建一个Dockerfile文件，如果您已经添加了此文件，可以忽略此步。

参考node.js项目地址：https://github.com/tenxcloud/docker-node-hello

```
# Dockerfile to create a docker image
# Base image
FROM node

# Add files to the image
RUN mkdir -p /opt/nodejs
ADD . /opt/nodejs
WORKDIR /opt/nodejs

# Install the dependencies modules
RUN npm install
# Expose the container port
EXPOSE 5000

ENTRYPOINT ["node", "index.js"]
```

2.通过"tce login" 登录TenxCloud引擎

3.输入"tce push nodejssample" 在TenxCloud上构建Docker 镜像，并push到TenxCloud的私有镜像服务器中：
```
root@>node-js-sample# tce push nodejssample
*************************************
Removing old package...
Analyzing Dockerfile...
Creating the package...
Creating package /tenxcloud/nodejs/node-js-sample/node-js-sample.zip
*************************************
=> Uploading the package...
Uploading 15 %
Uploading 100 %
File uploaded: node-js-sample.zip
Unzipping the file...
Unzip successfully...
=> Starting build engine...
[2015年05月28日 17:16:10] => Starting docker
[2015年05月28日 17:16:12] => Checking docker daemon
[2015年05月28日 17:16:12] Logging into registry...
[2015年05月28日 17:16:12] => Checking if the application already exists
<以下日志省略...>
```
4.登录 www.tenxcloud.com，在“镜像板块”的“我的镜像”中，可以看到刚刚构建的“nodejssample”镜像。

![tce1](/doc/v1/images/samples/tce_1.png)

5.切换到“容器服务”，在私有镜像中就能看到自己的镜像，并创建相应的容器服务了：
![tce1](/doc/v1/images/samples/tce_2.png)

注意：如果镜像没有 expose 任何端口，将不能创建容器服务，我们也可以在“我的镜像”中选择镜像，并在“服务接口”中配置镜像的端口和环境变量等信息。

