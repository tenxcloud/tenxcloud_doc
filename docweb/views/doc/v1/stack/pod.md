# Pod 编排
适用于紧耦合的服务组，保证一组服务始终部署在同一节点，并可以共享网络空间和存储卷。也就是同一个Pod 内的容器可以通过 localhost 访问彼此服务，共享网络空间，容器的端口不能互相冲突；对于同一个存储卷，可以被同一个Pod 的多个容器操作。

### Pod 示例
```
containers: <Pod所包含的所有容器>
  mysql: <容器名>
    image: index.tenxcloud.com/tenxcloud/mysql <镜像名>
    ports: <容器端口及协议>
     - port: 3306
       protocol: TCP
    mem_limit: 512Mi <内存限额>
    environment: <环境变量>
     - name: MYSQL_ROOT_PASSWORD
       value: password
    volumeMounts: <容器内数据卷>
     - name: volume1 <对应于共享目录名字>
       mountPath: /var/lib/mysql <容器内目录>
  ubuntu:
    image: index.tenxcloud.com/tenxcloud/ubuntu <镜像名>
    ports: <容器端口及协议>
     - port: 22
       protocol: TCP
    mem_limit: 256Mi <内存限额>
    volumeMounts: <容器内数据卷>
     - name: volume1 <对应于共享目录名字>
       mountPath: /my_data <容器内目录>
volumes: <可共享数据卷>
 - name: volume1 <共享目录名字>
   type: rbd <共享目录类型，目前仅支持 rbd>
   disk: disk1 <对应平台上的“存储与备份"的数据卷>
   fsType: ext4 <存储卷的文件格式>
```

通过这种方式，我们可以实现通过 ubuntu 的 ssh 服务登录后直接操作 mysql 数据的目的。同样，我们可以把 ubuntu 服务和其他的有状态服务进行编排，实现对服务数据的操作。
