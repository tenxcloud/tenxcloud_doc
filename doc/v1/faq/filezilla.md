# 使用FileZilla与容器同步文件

如果开启了ssh服务，我们可以使用[FileZilla](https://www.filezilla.cn/download/client)来与容器同步文件。FileZilla 客户端是一个快速可靠的、跨平台的FTP,FTPS和SFTP客户端。具有图形用户界面(GUI)和很多有用的特性。下面以lamp镜像为例简单介绍下它的使用方法。

1.查看镜像是否开启了ssh服务、及地址、密码、端口号、用户名（[详细请看这里](ssh.md)的1、2小节）

![addr_port][1]

![user_pwd][2]

2.在FileZilla中点击“文件” -> “站点管理器”，新建连接，按下图所示填写完成后点击“连接”

![new_session][3]

3.连接成功显示如下，左侧显示本机目录，右侧显示容器中的目录

![first_look][4]

4.切换“本地站点”与“远程站点”的目录，找到代码/app/index.php。通过双击/拖动/右键等多种方法可以将容器中的文件下载到本机中，然后在本机就能方便得修改代码文件，修改完成再通过相同方法将本机文件上传至容器。然后访问容器服务，即可看到修改生效。

修改前：

![before][5]

修改后：

![after][6]

[1]:/doc/v1/images/faq/filezilla/addr_port.png
[2]:/doc/v1/images/faq/filezilla/user_pwd.png
[3]:/doc/v1/images/faq/filezilla/new_session.png
[4]:/doc/v1/images/faq/filezilla/first_look.png
[5]:/doc/v1/images/faq/filezilla/before.png
[6]:/doc/v1/images/faq/filezilla/after.png
