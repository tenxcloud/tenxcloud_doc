## 私有集群中，使用私有镜像创建容器后，容器一直处于"启动"中?
最常见的原因是在在您的机器上没有权限 docker pull 私有镜像。通过下面三个步骤来查看容器"事件"，以确认

##### a. 点击复选框右边的黑色三角形（或者容器栏的空白处），展开容器实例
 
![host1](/doc/v1/images/host/faq-pull-image-1.png)

##### b. 点击处于"创建中"的实例，查看其"事件"
 
![host1](/doc/v1/images/host/faq-pull-image-2.png)

 ##### c. 点击"创建失败" 以展开事件,如果显示 "because there are no credentials"类似的错误，则断定为缺少pull 私有镜像的权限
 
![host1](/doc/v1/images/host/faq-pull-image-3.png)

#### 解决方法:

登录到私有主机上, 运行docker login index.tenxcloud.com, 输入用户名和密码, 不需要输入邮箱.

![host1](/doc/v1/images/host/faq-pull-image-4.png)

登录成功以后，Tenx-Agent守护程序会重新pull私有镜像，您不需要做任何操作。