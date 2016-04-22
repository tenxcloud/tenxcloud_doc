# 存储卷管理

“无状态”的容器服务自身不会持久化任何数据，这意味着容器重启时，上一次运行时的数据都将丢失。可以基于存储卷创建“有状态”的容器服务，这些容器服务将数据文件保存在存储卷中，以实现数据的存储、备份或共享。

## 创建存储卷

1. 进入“容器服务” -> “存储与备份”页面，点击“创建”按钮。

 ![create_volume1](/doc/v1/images/container/create_volume_1.png)

2. 在弹出框中输入名称，选择大小和格式，点击“创建存储卷”按钮。

 ![create_volume2](/doc/v1/images/container/create_volume_2.png)
 
3. 此时返回到存储卷列表页面，可以看到创建的存储卷

 ![create_volume3](/doc/v1/images/container/create_volume_3.png)

## 存储卷格式化

1. 在存储卷列表页面点击“功能”列的“格式化”按钮可以将对应的存储卷格式化。

 ![format_volume1](/doc/v1/images/container/format_volume_1.png)

2. 弹出框中选择文件系统格式后，点击“确定”按钮即可。

 ![format_volume2](/doc/v1/images/container/format_volume_2.png)
