# 时速云支持私有代码仓库构建吗？
*答：支持，时速云支持Github、Bitbucket、Coding、Gitlab私有仓库代码。*

#### 1.构建Github私有仓库代码

直接点击**添加源代码**，选择Github即可。

![faq-repo-list](/doc/v1/images/ci/ci-listcoderepo3.jpg)
#### 2.构建Bitbucket、Coding私有仓库代码
Bitbucket、Coding这两家代码托管网站均支持设置部署公钥，只要把时速云生成的公钥添加到私有仓库的部署公钥中，就可以在时速云平台上添加私有仓库了。

![faq-repo-deploy-key](/doc/v1/images/ci/faq-deplpoy-key.jpg)

时速云会为每个私有项目生成一个项目公钥，保证每个私有项目的安全性，将项目公钥添加到对应私有仓库的部署公钥里就可以了哦~

* 构建Bitbucket私有仓库代码

![faq-bitbucket-private.jpg](/doc/v1/images/ci/faq-bitbucket-private.jpg)

* 构建Coding私有仓库代码

![faq-coding-private.jpg](/doc/v1/images/ci/faq-coding-private.jpg)

**ps：1.部署公钥用于部署项目之用，只拥有只读权限；2.使用快速构建部署Coding私有仓库时需填写SSH地址并添加时速云部署公钥。**

