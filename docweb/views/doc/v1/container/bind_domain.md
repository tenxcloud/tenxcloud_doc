## 绑定域名
在上一小节中我们新建了一个容器，点击容器名称进入实例详情页，在这里我们可以查看容器的基本信息、实例、端口、监控(cpu|memory|network)、日志以及事件，还可以将容器实例的地址与自己的域名绑定，不过**TenxCloud只允许绑定备案过的域名**，下面我们就来看下如何绑定域名：

 ![domain_binding1](/doc/v1/images/container/domain_binding1.jpg)

1. 输入正确的域名后，点击**添加**，在这里我们填写hello.chromer.xyz，系统会自动生成一个CNAME地址：

 ![domain_binding2](/doc/v1/images/container/domain_binding2.jpg)

2. 在域名服务商处将指定域名的CNAME指向系统生成的CNAME地址：
![domain_binding3](/doc/v1/images/container/domain_binding3.jpg)
3. 这样域名绑定就完成了：
![domain_binding4](/doc/v1/images/container/domain_binding4.jpg)
