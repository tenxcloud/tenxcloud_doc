# Golang 开发者的云端之旅

对于 Golang 开发者来说，在通过容器化走向云端的道路上差的仅仅是一个**Dockerfile**，其它的事情可以放心扔给容器云厂商来完成。

接下来，我们以一个简单的例子，看看如何使用 Golang Docker 镜像，将我们的 Golang 应用容器化，并通过[时速云](https://console.tenxcloud.com)推向云端。

### 第一步：准备一个 Golang 程序

首先创建一个本地工作目录

``` shell
$ mkdir go-docker-example
$ cd go-docker-example
```

在这个目录下编写 Golang 程序（`main.go`）

``` go
package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":8080", nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello Tenxcloud!")
}
```

在本地运行这段代码

``` shell
$ go run main.go
```

在浏览器中打开 `http://localhost:8080/` 就能看到 `Hello Tenxcloud!` 字样。

接下来我们要做的就是通过[时速云](https://console.tenxcloud.com)将这个简单的 Golang 应用推向云端。 

### 第二步：编写 Dockerfile，让这个 Golang 程序可以被容器化

在 `go-docker-example` 目录下，创建一个 Dockerfile 文件，内容如下:

``` 
FROM index.tenxcloud.com/docker_library/golang

ADD . /go/src/go-docker-example
RUN go install go-docker-example
ENTRYPOINT /go/bin/go-docker-example

EXPOSE 8080
```

Dockerfile 的作用是提供一系列的步骤，按照这些步骤Docker能够以逐层叠加的方式从一个基础镜像构建出我们所需要的目标镜像。

> 详细的 Dockerfile 编写指南可以参见 [Dockerfile reference](https://docs.docker.com/engine/reference/builder/)。

上面的 Dockerfile 具体干了哪些事情呢？下面我们来详解上面文件里的每一条指令。

首先我们从[时速云](https://console.tenxcloud.com)镜像中心拉取一个 Golang 的官方 Docker 镜像，作为我们的基础镜像。

``` 
FROM index.tenxcloud.com/docker_library/golang
```

在该镜像中 `GOPATH` 环境变量的值是 `／go`，对应的 Golang 项目源代码目录为 `/go/src/<project_name>`。所以我对于我们这个应用程序，代码需要被上传到 `/go/src/go-docker-example`。

下面的语句就是将 Dockerfile 文件所在目录（`go-docker-example`）下的所有文件(即示例程序的所有源代码文件)上传到镜像里的 `go-docker-example` 目录下。

``` 
ADD . /go/src/go-docker-example
```

接着我们用 `go install` 命令编译上传到镜像里的程序源代码，生成可执行程序文件 `/go/bin/go-docker-example`。

``` 
RUN go install go-docker-example
```

然后我们将这个可执行程序通过 `ENTRYPOINT` 指令设置为容器的入口点，这样容器启动时就会执行该程序，向外提供服务了。

``` 
ENTRYPOINT /go/bin/go-docker-example
```

最后我们部署的是一个 HTTP 服务，端口号为8080，为了能够从外部访问该服务，我们需要将该端口从容器里通过 Docker 的 `EXPOSE` 指令暴露出来。

``` 
EXPOSE 8080
```

至此，我们在通向云端道路上最核心的工作 Dockerfile 的编写就完成了。
 
### 第三步：上传代码至 GitHub

为了能让 Docker 镜像通过[时速云](https://console.tenxcloud.com)进行自动构建，我们需要将代码发布到第三方代码托管平台上，此处我们以 GitHub 做为简单例子。

注意要上传的代码除了常规的 Golang 程序源代码文件外，还有前面我们千辛万苦编写的 Dockerfile，有了它我们才能将我们的 Golang 程序容器化。

首先在代码目录中初始化 Git。

``` shell
$ git init
```

然后添加好 GitHub 的仓库信息，并将其推送上去。

``` shell
$ git remote add origin https://github.com/<your_github_username>/go-docker-example.git
$ git add .
$ git commit -m 'Example init'
$ git push -u origin master
```

### 第四步：通过[时速云](https://console.tenxcloud.com)构建镜像并部署应用服务到云端

将代码上传到 GitHub 以后，就可以通过[时速云](https://console.tenxcloud.com)进行镜像构建和应用部署了。

##### 1. 登录[时速云](https://console.tenxcloud.com)，然后进入`控制台`。

![控制台](/doc/v1/images/devcloud/devcloud-golang/console.png)

##### 2. 进入`代码构建`，选择`添加源代码`。

![添加源代码](/doc/v1/images/devcloud/devcloud-golang/addsource.png)

##### 3. 选择 `GitHub`-`同步源代码`，输入自己的GitHub用户名、密码登录。

![同步源代码](/doc/v1/images/devcloud/devcloud-golang/syncsource.png)

##### 4. 选择GitHub项目 `<your_username>/go-docker-example`，作为镜像构建的代码源。

![选择 GitHub 项目](/doc/v1/images/devcloud/devcloud-golang/selectsource.png)

##### 5. 点击`创建`，开始创建项目，并构建镜像。

![创建项目](/doc/v1/images/devcloud/devcloud-golang/build.png)

##### 5. 等待构建完成。

![构建完成](/doc/v1/images/devcloud/devcloud-golang/buildsuccess.png)

##### 6. 点击`快速部署`，开始部署镜像，在云端提供服务。

![快速部署](/doc/v1/images/devcloud/devcloud-golang/deploy.png)

##### 7. 输入`服务名称`并点击`创建`。

![快速部署](/doc/v1/images/devcloud/devcloud-golang/createservice.png)

#####  8. 等待服务状态变为`运行中`，表示服务创建成功并启动完成，后面会提供`服务地址`。

![部署完成](/doc/v1/images/devcloud/devcloud-golang/deploysuccess.png)

#####  9. 点击`服务地址`，访问云端服务，可以看到我们期望的`Hello Tenxcloud!`字样，说明我们的 Golang 应用在云端工作正常。

![访问服务](/doc/v1/images/devcloud/devcloud-golang/accessservice.png)
