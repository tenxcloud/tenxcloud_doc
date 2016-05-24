#### Docker简介

Docker项目提供了构建在Linux内核功能之上，协同在一起的的高级工具。其目标是帮助开发和运维人员更容易地跨系统跨主机交付应用程序和他们的依赖。Docker通过Docker容器，一个安全的，基于轻量级容器的环境，来实现这个目标。这些容器由镜像创建，而镜像可以通过命令行手工创建或者通过Dockerfile自动创建。

#### 什么是Dockerfiles

Dockerfiles是由一系列命令和参数构成的脚本，这些命令应用于基础镜像并最终创建一个新的镜像。它们简化了从头到尾的流程并极大的简化了部署工作。Dockerfile从FROM命令开始，紧接着跟随者各种方法，命令和参数。其产出为一个新的可以用于创建容器的镜像。

#### Dockerfile 命令

Dockerfile有十几条命令可用于构建镜像，下文将简略介绍这些命令。

ADD
```
ADD命令有两个参数，源和目标。它的基本作用是从源系统的文件系统上复制文件到目标容器的文件系统。如果源是一个URL，那该URL的内容将被下载并复制到容器中。
# Usage: ADD [source directory or URL] [destination directory]
ADD /folder1 /folder1
```
CMD
```
和RUN命令相似，CMD可以用于执行特定的命令。和RUN不同的是，这些命令不是在镜像构建的过程中执行的，而是在用镜像构建容器后被调用。
# Usage 1: CMD application "argument", "argument", ..
CMD "echo" "Hello docker!"
```
ENTRYPOINT
```
ENTRYPOINT 帮助你配置一个容器使之可执行化，如果你结合CMD命令和ENTRYPOINT命令，你可以从CMD命令中移除“application”而仅仅保留参数，参数将传递给ENTRYPOINT命令，
# Usage: ENTRYPOINT application "argument", "argument", ..
# Remember: arguments are optional. They can be provided by CMD
# or during the creation of a container.
ENTRYPOINT echo
# Usage example with CMD:
# Arguments set with CMD can be overridden during *run*
CMD "Hello docker!"
ENTRYPOINT echo
```
ENV
```
ENV命令用于设置环境变量。这些变量以”key=value”的形式存在，并可以在容器内被脚本或者程序调用。这个机制给在容器中运行应用带来了极大的便利。
# Usage: ENV key value
ENV SERVER_WORKS 4
```
EXPOSE
```
EXPOSE用来指定端口，使容器内的应用可以通过端口和外界交互。
# Usage: EXPOSE [port]
EXPOSE 8080
```
FROM
```
FROM命令可能是最重要的Dockerfile命令。改命令定义了使用哪个基础镜像启动构建流程。基础镜像可以为任意镜像。如果基础镜像没有被发现，Docker将试图从Docker image index来查找该镜像。FROM命令必须是Dockerfile的首个命令。
# Usage: FROM [image name]
FROM ubuntu
```
MAINTAINER
```
我建议这个命令放在Dockerfile的起始部分，虽然理论上它可以放置于Dockerfile的任意位置。这个命令用于声明作者，并应该放在FROM的后面。
# Usage: MAINTAINER [name]
MAINTAINER authors_name
```
RUN
```
RUN命令是Dockerfile执行命令的核心部分。它接受命令作为参数并用于创建镜像。不像CMD命令，RUN命令用于创建镜像（在之前commit的层之上形成新的层）。
# Usage: RUN [command]
RUN aptitude install -y riak
```
USER
```
USER命令用于设置运行容器的UID。
# Usage: USER [UID]
USER 751
```
VOLUME
```
VOLUME命令用于让你的容器访问宿主机上的目录。
# Usage: VOLUME ["/dir_1", "/dir_2" ..]
VOLUME ["/my_files"]
```
WORKDIR
```
WORKDIR命令用于设置CMD指明的命令的运行目录。
# Usage: WORKDIR /path
WORKDIR ~/
```

#### Dockerfiles示例
```
FROM debian:jessie

MAINTAINER NGINX Docker Maintainers "docker-maint@nginx.com"

RUN apt-key adv --keyserver hkp://pgp.mit.edu:80 --recv-keys 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
RUN echo "deb http://nginx.org/packages/mainline/debian/ jessie nginx" >> /etc/apt/sources.list

ENV NGINX_VERSION 1.9.4-1~jessie

RUN apt-get update && \
    apt-get install -y ca-certificates nginx=${NGINX_VERSION} && \
    rm -rf /var/lib/apt/lists/*

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

VOLUME ["/var/cache/nginx"]

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
```

