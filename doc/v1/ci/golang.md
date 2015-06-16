# 快速部署golang应用

如果您需要快速部署一个Java的应用到TenxCloud的容器平台，可以使用如下步骤:

1.首先在你的Java项目目录中创建一个Dockerfile文件，如果您已经添加了此文件，可以忽略此步。

参考gosample项目：https://github.com/tenxcloud/golang-sample.git

```
# Dockerfile to create a docker image
# Base image
FROM golang:1.4.2

# Add project folder to the image
ADD . $GOPATH/src

ADD run.sh /run.sh

RUN chmod +x /run.sh

# Expose the container port
EXPOSE 8080

WORKDIR $GOPATH/src

CMD ["/run.sh"]
```

2.通过"tce login" 登录TenxCloud引擎

3.输入"tce push gosample" 在TenxCloud上构建Docker 镜像，并push到TenxCloud的私有镜像服务器中：

![tce1](/doc/v1/images/samples/gosample/tce_go_push.png)

4.登录 www.tenxcloud.com，在“集成板块”中，可以看到刚刚构建的“gosample”项目。

![tce1](/doc/v1/images/samples/gosample/tce_go_cilist.png)

5.进入项目，可以在构建日志标签下，同样可以看到我们镜像构建的日志：
![tce1](/doc/v1/images/samples/gosample/tce_go_cilogs.png)

6.点击“部署”，填写信息，点击确定，页面跳转至容器页，并可以看到创建了gosample的容器。
![tce1](/doc/v1/images/samples/gosample/tce_go_apply.png)

7.等待实例运行状态变为‘运行中’后，点击‘服务地址’，可直接进入我们的gosample项目。
![tce1](/doc/v1/images/samples/gosample/tce_go_link.png)

8.接下来就可以看到我们的gosample项目了。
![tce1](/doc/v1/images/samples/gosample/tce_go_success.png)


