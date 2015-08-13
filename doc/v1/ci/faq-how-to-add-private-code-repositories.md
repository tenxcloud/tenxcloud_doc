# 如何添加私有代码仓库？

#### 1.添加Github、Bitbucket私有仓库代码

直接点击**添加源代码**，选择Github或Bitbucket即可，Bitbucket的token有效期较短，可能需要注销后重新绑定。

![faq-repo-list](/doc/v1/images/ci/faq-repo-list.jpg)
#### 2.添加Coding、Gitcafe、Oschina私有仓库代码私有仓库代码
Coding、Gitcafe、Oschina这三家代码托管网站均支持设置部署公钥，只要把时速云生成的公钥添加到私有仓库的部署公钥中，就可以在时速云平台上添加私有仓库了。

时速云生成的部署公钥为：
```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDcDWQNvl+5eLT5eoa4HyAdlcJYSAoBZ9oNexXfpZd0/e5yy/ESkgbt22shzV0PfqN0SF9JzTl//keJnsXCcYyhLvswk87ZZNwmXv9qILEmaB+8B0ifsQHFoPIUyzA9A9kc8HLBBBS31iLukAw0jmhZpbPzNVUsdmubi3zdPxpzXbYBaDWkleS8XizmiKKryrGbjkyg5d351TqQiZTO6AJymZwwFyKf7e0FnaY50DrlbnUX8Lv7PF5UxrI6wBzqEUmAzFMq0Hob6xzPBLVPvvNtvMttZ2AadYdiAvbDf4CVnxHyo4QZDivVxZ2RXReXidjZVHnbp9WWG53Nxz+n/43D Builder@tenxcloud.com
```
把上面的公钥复制然后添加到对应私有仓库的部署公钥里就可以了哦~
* 添加Coding私有仓库代码

![faq-coding-private.jpg](/doc/v1/images/ci/faq-coding-private.jpg)
* 添加GitCafe私有仓库代码

![faq-gitcage-private.jpg](/doc/v1/images/ci/faq-gitcage-private.jpg)
* 添加Oschina私有仓库代码

![faq-oschina-private.jpg](/doc/v1/images/ci/faq-oschina-private.jpg)

**ps：1.部署公钥用于部署项目之用，只拥有只读权限；2.使用快速构建部署Coding、Gitcafe、Oschina私有仓库时需填写SSH地址并添加时速云部署公钥。**

