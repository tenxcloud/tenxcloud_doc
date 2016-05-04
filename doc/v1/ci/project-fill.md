### 填写项目信息
上一节我们选择**tenxcloud/golang-sample**，进入了添加项目页面：

![addproject](/doc/v1/images/ci/ci-addproject.jpg)

下面列出了项目信息的相关表单，可以参考以下表格进行填写：

| *表单*           | *说明* | *是否必填* |
| --             | -- | -- |
| 仓库名称       | ** 仓库名称只能由字母、数字及横线组成，且首字母不能为横线。 ** | 必填，**不能与自己名下的其他仓库名称相同，否则重名的镜像会被覆盖** |
| 简介           | 默认获取源代码简介 | 可选 |
| 项目名称       | 默认获取源代码项目名称 | 必填 |
| Dockerfile位置 | Dockerfile相对路径 | 必填，默认为 **'/'** |
| 代码分支       | 默认均为master | 目前不可编辑 |
| 程序类型       | 编写项目的语言 | 可选 |
| Docker的版本   | 目前默认均为v1.6 | 不可编辑 |
| 构建节点       | 根据是否需要翻墙访问资源选择 | 可选“国际节点”和“国内节点” |

* 注：
 * 源代码中一定要有Dockerfile，否则构建会失败，可以点击GitHub地址查看自己的项目。
 * 系统会自动获取**Dockerfile**中EXPOSE的**容器端口**，如需重新设定，在项目构建完成后，在**项目详情页->操作->修改镜像**中重新设定。

下面是**golang-sample**项目下**/**的Dockerfile：

```
FROM golang:1.4.2

ADD . $GOPATH/src

ADD run.sh /run.sh

RUN chmod +x /run.sh

EXPOSE 8080

WORKDIR $GOPATH/src

CMD ["/run.sh"]
```
关于如何编写Dockerfile，可以参考英文官方文档 -> [编写Dockerfile](http://docs.docker.com/reference/builder/)，我们后续会提供中文版，并随时提供技术支持。

点击 **“创建”**，页面跳转到项目详情页，开始构建该项目的第一个镜像。
![addproject2](/doc/v1/images/ci/ci-addproject2.jpg)

注：有些项目构建用时会比较长，我们正在优化构建环境，后续在速度上会有较大提升。

