# 时速云支持gitlab私有代码仓库构建吗？
*答：支持，时速云支持Github、Bitbucket、Coding、Gitlab私有仓库代码。*

#### 1.构建Gitlab私有仓库代码

点击**添加源代码**，选择Gitlab。

![faq-repo-list-gitlab](/doc/v1/images/ci/faq-repo-list-gitlab.jpg)


#### 2.添加Gitlab的URL和private_token

Gitlab的url格式为:http://gitlab.gitlab.com(记得带上您的协议哦)。

Gitlab的private_token位置参考下图
![faq-gitlab-private_token](/doc/v1/images/ci/faq-gitlab-private_token.jpg)


添加完成后点击同步源代码，静静的等待源代码的同步完成。
![faq-gitlab-getrepo](/doc/v1/images/ci/faq-gitlab-getrepo.jpg)

#### 3.构建Gitlab的私有仓库代码

点击需要构建的项目链接
![faq-gitlab-build](/doc/v1/images/ci/faq-gitlab-build.jpg)

填写和选择信息后，点击创建按钮
![faq-gitlab-detail](/doc/v1/images/ci/faq-gitlab-detail.jpg)

时速云生成的公钥
![faq-gitlab-key](/doc/v1/images/ci/faq-gitlab-key.jpg)

将时速云生成的公钥添加到私有仓库的部署公钥中，添加完成后，返回时速云，点击构建按钮
![faq-gitlab-addkey1](/doc/v1/images/ci/faq-gitlab-addkey1.jpg)
![faq-gitlab-addkey2](/doc/v1/images/ci/faq-gitlab-addkey2.jpg)

时速云会为每个私有项目生成一个项目公钥，保证每个私有项目的安全性，将项目公钥添加到对应私有仓库的部署公钥里就可以了哦~

**ps：1.部署公钥用于部署项目之用，只拥有只读权限；2.使用快速构建部署Coding、Gitlab私有仓库时需填写SSH地址并添加时速云部署公钥。**

