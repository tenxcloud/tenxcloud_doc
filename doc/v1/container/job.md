# 工作任务

工作任务用于执行一次性任务或批处理任务，创建后系统会分配一个实例来执行用户指定任务，执行完成后自动退出。

工作任务支持设置环境变量以及使用存储卷，但不支持外部访问服务地址、灰度升级、弹性扩容等操作。

## 创建工作任务

创建一个工作任务需要下面几个步骤：

1. 进入“容器服务” -> “工作任务”页面，点击“创建”按钮。如下图：

 ![create_job1](/doc/v1/images/container/create_job_1.png)

2. 在新页面中选择“公有示例”的镜像tenxcloud/perl_job，该任务将计算π的值。用户也可以自建私有镜像来执行任务。如下图：

 ![create_job2](/doc/v1/images/container/create_job_2.png)

3. 在“容器配置”页面输入“服务名称”并点击创建按钮。如下图：

 ![create_job3](/doc/v1/images/container/create_job_3.png)

4. 创建完成后将返回工作任务列表页面，并会看到刚才创建的工作任务。一段时间后可以看到该任务的“运行状态”变成“已完成”。如下图：

 ![create_job4](/doc/v1/images/container/create_job_4.png)

5. 点击任务名称，可以进入详情页面。在详情页面点击“日志”可以看到π的计算结果。如下图：

 ![create_job5](/doc/v1/images/container/create_job_5.png)

## 删除工作任务

删除工作任务需要下面几个步骤：

1. 进入“容器服务” -> “工作任务”页面，勾选需要删除的任务。点击“更多操作” -> “删除”按钮。如下图：

 ![delete_job1](/doc/v1/images/container/delete_job_1.png)

2. 此时将弹出提示框，点击“确定”按钮即可删除选中的工作任务。如下图：

 ![delete_job2](/doc/v1/images/container/delete_job_2.png)

