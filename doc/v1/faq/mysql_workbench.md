# 使用MySQL Workbench

时速云向用户提供了[MySQL镜像](https://hub.tenxcloud.com/repos/tenxcloud/mysql)，当我们启动MySQL服务后如何使用MySQL Workbench进行管理呢，下面进行介绍。

1.MySQL启动后，在服务详情的端口和日志中找出其服务地址（mysql-tailnode.tenxapp.com）、映射端口（48148）、用户名（admin）、密码（vvi3SnrL9jbG）

![infos][1]

2.启动MySQL Workbench，新建连接，参考下图输入第1步中取得的信息

![connect][2]

3.填写完成后点击"Test Connection"，测试连接是否正常

![connect_ok][3]

4.最后点击“ok”完成连接设置，在主面板可看到新添加的连接，点击进入数据库详情即可进行查询与管理

![connect_ok][4]

[1]:/doc/v1/images/faq/mysql_workbench/infos.png
[2]:/doc/v1/images/faq/mysql_workbench/connect.png
[3]:/doc/v1/images/faq/mysql_workbench/connect_ok.png
[4]:/doc/v1/images/faq/mysql_workbench/main_board.png
