# 停止/启动/重新部署/删除容器
在容器列表页，勾选容器后，我们可以进行对应的 **停止/启动/重新部署/删除** 容器等操作：

 ![container_handle1](/doc/v1/images/container/container_handle1.jpg)
 ![container_handle2](/doc/v1/images/container/container_handle2.jpg)
 ![container_handle3](/doc/v1/images/container/container_handle3.jpg)
#### 注：
* **停止/启动/重新部署/删除**均可以批量操作，但是**停止/启动**操作对容器状态有要求，容器状态不能与操作相同，正在初始化的容器则不能进行**停止/启动**操作
* 如果您的容器是操作系统（ubuntu、debian、centos），**停止/重新部署**后数据会丢失
* **重新部署**可以理解为**重启**服务的升级版,在**重新部署**时可以选择镜像版本
