# 存储与备份

**注意：目前仅支持在北京2区创建存储卷**

### 获取存储卷列表

获取用户在指定集群上的存储卷

    GET /v1/regions/{region}/volumes

请求示例：

    curl "https://api.tenxcloud.com/v1/regions/beijing2/volumes" -H "username:[user_name]" -H "Authorization: token [api_token]"

响应示例：

    {
      "region": "beijing2",
      "volumes": [
        {
          "disk_name": "disk1",
          "diskType": "rbd",
          "fsType": "ext4",
          "size": 1024
        },
        {
          "disk_name": "disk2",
          "diskType": "rbd",
          "fsType": "ext4",
          "size": 1024
        }
      ]
    }

### 创建存储卷
创建一个新的存储卷

    POST /v1/regions/{region}/volumes/{volume-name}

请求示例：

    curl "https://api.tenxcloud.com/v1/regions/beijing2/volume/volume-name" -H "username:[user_name]" -H "Authorization: token [api_token]" -H "Content-Type: application/json" -X POST --data @volume.json

其中volume.json 示例如下：

    {
      "diskType": "rbd",  # 目前支持rbd和nfs，其中rbd 不能在服务之间共享、nfs可以在多个容器间共享
      "fsType": "ext4",  #支持 ext4 和 xfs两种文件格式
      "size": 1024 # 存储大小，单位M，范围 1024(1G) ~ 40960(40G) 之间
    }

响应示例：

    {
      "disk_name": "volume-name",
      "diskType": "rbd",
      "fsType": "ext4",
      "size": 1024
    }

### 删除存储卷
删除某个存储卷

    DELETE /v1/regions/{region}/volumes/{volume-name}

请求示例：

    curl "https://api.tenxcloud.com/v1/regions/beijing2/volume/volume-name" -H "username:[user_name]" -H "Authorization: token [api_token]" -X DELETE

响应示例：

    Volume was deleted successfully.


