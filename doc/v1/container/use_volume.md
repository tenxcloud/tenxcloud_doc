# 存储卷使用

## 创建有状态容器服务

1. 新建一个容器服务，选择镜像来源时搜索并选择bagheera/ssh镜像。

 ![create_stateful_container1](/doc/v1/images/container/create_stateful_container_1.png)

2. 在容器配置页面中，“服务类型”勾选“有状态服务”，并选择之前创建的“my-volume”存储卷。

 ![create_stateful_container2](/doc/v1/images/container/create_stateful_container_2.png)

3. 在容器服务列表页面点击刚创建的服务名称，进入容器服务详情页面。

 ![create_stateful_container3](/doc/v1/images/container/create_stateful_container_3.png)

4. 在服务详情页面点击“打开控制台”按钮

 ![create_stateful_container4](/doc/v1/images/container/create_stateful_container_4.png)

5. 在弹出框中可以看到登录控制台需要的用户名和密码，此时点击“打开控制台”按钮。点击后会弹出新窗口，并要求验证，输入之前显示的用户名和密码，验证通过后可以进入控制台。

 ![create_stateful_container5](/doc/v1/images/container/create_stateful_container_5.png)

6. 在控制台中输入下图所示指令，生成demo.txt文件。

 ![create_stateful_container6](/doc/v1/images/container/create_stateful_container_6.png)

7. 关闭控制台，回到容器服务列表页面。停止创建的服务并再次启动。启动后再次打开服务的控制台。查看demo.txt文件。

 ![create_stateful_container7](/doc/v1/images/container/create_stateful_container_7.png)

    可以看到demo.txt文件依然存在，且内容与我们重启之前的内容是一致的。至此我们已经了解到通过存储卷创建有状态容器服务，并用其保存服务数据的方法。

## 数据导入

1. 通过存储卷的“导入”功能，我们可以将外部文件导入到存储卷中。在导入之前需要先停止对应的容器服务。在容器服务列表页面执行下图所示操作。

 ![volume_import1](/doc/v1/images/container/volume_import_1.png)

2. 服务停止后，进入“容器服务” -> “存储与备份”页面。点击存储卷名称，进入存储卷详情页面。

 ![volume_import2](/doc/v1/images/container/volume_import_2.png)

3. 在电脑中打开任意的文本编辑器，创建一个“import_demo.txt”文本文件，输入“this is a file outside the container”并保存。

4. 回到存储卷详情页面，点击“导入文件”按钮。

 ![volume_import3](/doc/v1/images/container/volume_import_3.png)

5. 将“import_demo.txt”文件拖入到弹出框中。

 ![volume_import4](/doc/v1/images/container/volume_import_4.png)

6. 完成后，可以在存储卷详情页面下方看到操作记录。

 ![volume_import5](/doc/v1/images/container/volume_import_5.png)

7. 此时回到容器服务列表页面，启动之前关闭的服务，并打开控制台。查看import_demo.txt文件内容。

 ![volume_import6](/doc/v1/images/container/volume_import_6.png)

    可以看到我们能够正常查看“import_demo.txt”的文件内容。

## 数据导出

1. 使用存储卷的“导出”功能，我们可以将容器内的数据文件导出。通过导出功能可以实现备份作用。首先进入到存储卷详情页面，点击“导出文件”按钮。

 ![volume_export1](/doc/v1/images/container/volume_export_1.png)

2. 此时会出现弹出框进行短信验证，点击“发送验证码”。验证短信稍后后发送到注册的手机上，输入验证码并点击“确定”按钮。

 ![volume_export2](/doc/v1/images/container/volume_export_2.png)

3. 此时会看到存储卷详情页面下方看到操作记录出现了刚才的导出操作。点击该条记录的“下载”按钮，可将导出文件下载到本地。导出文件格式为zip压缩包。

 ![volume_export3](/doc/v1/images/container/volume_export_3.png)