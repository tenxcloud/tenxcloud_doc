## 如何在IaaS平台上创建AccessKeyId和SecretAccessKey
####1. AWS (中国和国际版通用)。
##### a. 进入AWS控制面板"服务"->"管理和安全"->"IAM"。

![host1](/doc/v1/images/host/faq-create-access-key.png)

##### b. 创建一个"组"，并赋予对EC2的操作权限("AmazonEC2FullAccess")，如下图

![host1](/doc/v1/images/host/faq-create-access-key2.png)

##### c. 创建一个"用户"，创建用户成功以后，AWS控制台会提示下载"安全凭证"。

![host1](/doc/v1/images/host/faq-create-access-key3.png)

##### d. 将新创建的用户添加到之前创建的"组"。

![host1](/doc/v1/images/host/faq-create-access-key4.png)

####2. 阿里云。点击控制面板上"工单服务"左侧的"AccessKeys"，按步骤创建即可。

![host1](/doc/v1/images/host/faq-create-access-key-aliyun.png)