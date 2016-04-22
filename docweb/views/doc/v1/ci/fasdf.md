#命令详解
1. `tce exec <app_name> <command>...`
  * 先通过`tce ps`查询应用名app-name
  * 然后执行想执行的命令，例如查看/usr目录下文件

    `tce exec app-name ls -l /usr`
    ```
    执行结果:
    total 32
    drwxr-xr-x  2 root root 4096 May 28 10:03 bin
    drwxr-xr-x  2 root root 4096 Apr 19  2012 games
    drwxr-xr-x  3 root root 4096 Apr 20  2012 include
    drwxr-xr-x 22 root root 4096 May 28 10:02 lib
    drwxr-xr-x 10 root root 4096 Apr 27 07:10 local
    drwxr-xr-x  2 root root 4096 May 28 10:02 sbin
    drwxr-xr-x 45 root root 4096 May 28 10:02 share
    drwxr-xr-x  2 root root 4096 Apr 19  2012 src
    ```
2. `tce help`
  * 查看tce客户端帮助
3. `tce login`
  * 登陆时速云账号，登陆后会在$HOME目录下创建一个.tcecfg文件.存储信息
4. `tce logout`
  * 登出，退出时速云账号
5. `tce logs <project Name>`
  * 查看指定构建镜像的最近一次构建日志
  * 构建时，构建日志输出中断，可以使用此命令继续查看构建日志
6. `tce projects`
  * 查看使用tce部署的项目(持续集成项目)
  * 使用 `tce projects -a`  查看TenxCloud上所有构建的项目(包括github等其他方式构建的项目)
7. `tce ps`
  * 查看正在运行的应用列表
8. `tce push <project Name>:<tag>`
  *  通过终端进入代码目录，该目录下必须包含Dockerfile。关于如何编写Dokerfile，可以参考英文官方文档 -> [编写Dockerfile](http://docs.docker.com/reference/builder/)
  *  客户端会自动将Dockerfile及引用的本地文件打包成zip，并上传到TenxCloud，由我们的容器引擎创建Docker 项目。这个过程会持续输出Docker build 的相关日志，方便跟踪镜像构建进度。
 注意：在这个过程中，我们会解析Dockerfile里的ADD 和COPY 指令集，打包所依赖的文件和目录，并且指令的源路径必须使用相对路径，不支持使用绝对路径，暂不支持添加空目录，比如：<br/>
 `ADD . /opt` 将当前目录下所有文件一起打包<br/>
 `ADD testDir/. /opt` 将项目 testDir目录下所有文件打包<br/>
 `ADD testDir/ /opt` 将项目testDir目录下所有文件打包<br/>
 `ADD testDir/file*.txt /opt` * 匹配<br/>
 `ADD testDir/file?.txt /opt` ? 匹配

9. `tce run`
  * 使用`tce run -help`来查看run命令帮助
  * 使用`tce run -f=file.json`来指定本地的json文件，-f 默认值为当前目录的tce.json,可以使用绝对路径指定。根据文件内容创建一个符合要求的应用。文件具体格式如下：
  ```
{
	"name":"runsample", //应用名，必须字母开头，包含小写字母和数字及'-`
	"image":"tenxcloud/hello-world:latest", //镜像名，tag默认为latest
	"district":"beijing2",//时速云分区，两种写法，beijing1或者beijing2
	"replicas":1, //创建几个实例，范围为1~3
	"memory":512, //选择应用内存，可选值为128,256,512,1024
	"envs":[{     //环境变量，可以不填，如果需要密码等环境变量可以参考镜像说明填写
	    "name": "envname",
	    "value": "envvalue"
	  }]
}
```
提示：上传文件不能写注释

10. `tce version`
  * 查看当前版本，如果有新版本，会提示更新
