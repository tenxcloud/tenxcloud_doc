# Stack
Stack 是指包含多个镜像的服务，设计上与 Docker Compose 相似。Stack 支持用 yaml 文件描述多个容器镜像之间的关系，可自由定制每个镜像的属性，并支持一键部署并运行Stack。

### Stack 示例
```
wordpress:
  image: tenxcloud/wordpress-stack:latest  <镜像名称>
  links:  <链接的服务>
    - mysql
  ports:  <服务端口号>
   - port: 80
     protocol: HTTP
  replicas: 1  <实例数量>
  mem_limit: 512Mi  <内存大小>
  cpu_shares: 125m  <CPU大小>
  environment:  <环境变量>
    WORDPRESS_DB_PASSWORD: **Random**
mysql:
  image: docker_library/mysql:latest  <镜像名称>
  ports:  <服务端口号>
   - port: 3306
     protocol: TCP
  replicas: 1  <实例数量>
  mem_limit: 512Mi  <内存大小>
  cpu_shares: 125m  <CPU大小>
  environment:  <环境变量>
    MYSQL_ROOT_PASSWORD: **Random**
```
