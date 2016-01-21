# 服务

### 获取服务列表

获取用户在指定集群上的服务信息

    GET /v1/regions/{region}/services

请求示例：

    curl "https://api.tenxcloud.com/v1/regions/beijing1/services" -H "username:[user_name]" -H "Authorization: token [api_token]"

响应示例：

    {
      "region": "beijing1",
      "services": [
        {
          "uid": "00144651-304e-11e5-97b5-525459f27fef",
          "name": "myblog-mysql",
          "created_at": "2015-11-27T08:51:08Z",
          "status": "Running",
          "target_instance_size": 1,
          "containers": [
            {
              "name": "myblog-mysql",
              "image": "index.tenxcloud.com/tenxcloud/mysql:latest",
              "command": [
                "/run.sh"
              ],
              "env": [
                {
                  "name": "MYSQL_USER",
                  "value": "admin"
                },
                {
                  "name": "MYSQL_PASS",
                  "value": "password"
                }
              ],
              "ports": [
                {
                  "container_port": 3306,
                  "protocol": "TCP"
                }
              ],
              "resources": {
                "limits": {
                  "memory": "512Mi"
                }
              },
              "volumeMounts": [
                {
                  "name": "volume-name1",
                  "mountPath": "/data"
                }
              ],
              "imagePullPolicy": "IfNotPresent"
            }
          ],
          "port_mapping": [
            {
              "service_port": 58767,
              "container_port": 3306,
              "protocol": "tcp"
            }
          ],
          "volumes": [
            {
              "name": "volume-name1",
              "disk_name": "disk1",
              "fsType": "ext4",
              "is_read_only": false
            }
          ],
          "default_domain_name": "myubuntu-demox.tenxapp.com",
          "binding_domain_name": [
            "www.xxxx.cn"
          ]
        }
      ]
    }

### 获取服务信息

获取用户指定服务的信息：

    GET /v1/regions/{region}/services/{name}

请求示例：

    curl "https://api.tenxcloud.com/v1/regions/beijing1/services/service_name" -H "username:[user_name]" -H "Authorization: token [api_token]"

响应：

    {
      "region": "beijing1",
      "uid": "00144651-304e-11e5-97b5-525459f27fef",
      "name": "myblog-mysql",
      "created_at": "2015-11-27T08:51:08Z",
      "status": "Running",
      "target_instance_size": 1,
      "containers": [
        {
          "image": "index.tenxcloud.com/tenxcloud/mysql:latest",
          "command": [
            "/run.sh"
          ],
          "env": [
            {
              "name": "MYSQL_USER",
              "value": "admin"
            },
            {
              "name": "MYSQL_PASS",
              "value": "password"
            }
          ],
          "ports": [
            {
              "container_port": 3306,
              "protocol": "TCP",
            }
          ],
          "resources": {
            "limits" {
              "cpu": "125m",
              "memory": "512Mi"
            }
          },
          "volumeMounts": [
            {
              "name": "volume-name1",
              "mountPath": "/data"
            }
          ],
          "imagePullPolicy": "IfNotPresent"
        }
      ],
      "port_mapping": [
        {
          "service_port": 23432,
          "container_port": 3306,
          "protocol": "tcp"
        }
      ],
      "volumes": [
        {
          "name": "volume-name1",
          "disk_name": "disk1",
          "fsType": "ext4",
          "is_read_only": false
        }
      ],
      "default_domain_name": "myubuntu-demox.tenxapp.com",
      "binding_domain_name": [
        "www.xxxx.cn"
      ]
    }

### 创建服务
创建一个新服务

    POST /v1/regions/{region}/services

请求示例：

    curl "https://api.tenxcloud.com/v1/regions/beijing1/services/service_name" -H "username:[user_name]" -H "Authorization: token [api_token]" -H "Content-Type: application/json" -X POST --data @service.json

service.json示例：

    {
      "name": "service_name",
      "target_instance_size": 1,
      "containers": [
        {
          "image": "index.tenxcloud.com/tenxcloud/mysql:latest",
          "command": [
            "/run.sh"
          ],
          "env": [
            {
              "name": "MYSQL_USER",
              "value": "admin"
            },
            {
              "name": "MYSQL_PASS",
              "value": "password"
            }
          ],
          "ports": [
            {
              "port": 3306,
              "protocol": "TCP"
            }
          ],
          "resources": {
            "limits": {
              "memory": 512
            }
          },
          "volumeMounts": [
            {
              "name": "volume-name1",
              "mountPath": "/data"
            }
          ]
        }
      ],
      "port_mapping": [
        {
          "container_port": 3306,
          "protocol": "tcp"
        }
      ],
      "volumes": [
        {
          "name": "volume-name1",
          "disk_name": "disk1",
          "is_read_only": false
        }
      ],
      "sync_timezone": true,
      "binding_domain_name": [
        "www.xxxx.cn"
      ]
    }

响应将返回创建的服务的详细信息：

    {
      "name": "myblog-mysql",
      "target_instance_size": 1,
      "containers": [
        {
          "image": "index.tenxcloud.com/tenxcloud/mysql:latest",
          "command": [
            "/run.sh"
          ],
          "env": [
            {
              "name": "MYSQL_USER",
              "value": "admin"
            },
            {
              "name": "MYSQL_PASS",
              "value": "password"
            }
          ],
          "ports": [
            {
              "port": 3306,
              "protocol": "TCP"
            }
          ],
          "resources": {
            "limits" {
              "memory": 512
            }
          },
          "volumeMounts": [
            {
              "name": "volume-name1",
              "mountPath": "/data"
            }
          ]
        }
      ],
      "port_mapping": [
        {
          "container_port": 3306,
          "protocol": "TCP",
          "service_port": 50237
        }
      ],
      "volumes": [
        {
          "name": "volume-name1",
          "disk_name": "disk1",
          "fsType": "ext4",
          "is_read_only": false
        }
      ],
      "default_domain_name": "myubuntu-demox.tenxapp.com",
      "binding_domain_name": [
        "www.xxxx.cn"
      ]
    }

### 删除服务
删除用户的指定服务

    DELETE /v1/regions/{region}/services/{name}

请求示例：

    curl "https://api.tenxcloud.com/v1/regions/beijing1/services/service_name" -H "username:[user_name]" -H "Authorization: token [api_token]" -X DELETE

响应示例：

    正常：200 (Service was deleted successfully)
    其他错误参见文档底部

### 更新服务
更新指定服务的属性：

    PUT /v1/regions/{region}/services/{name}

目前支持的更新属性：

    target_instance_size: #服务节点的数量
    containers:
      resources:
        memory: # 容器 Memory 限制 (int), 256, 512, 1024, 2048
    binding_domain_name: #服务所绑定的域名

请求示例：

    curl "https://api.tenxcloud.com/v1/regions/beijing1/services/service_name" -H "username:[user_name]" -H "Authorization: token [api_token]" -H "Content-Type: application/json" -X PUT --data @update_service.json

request_body 示例：

    {
        "target_instance_size": 1,
        "containers": [
          {
            "resource": {
                "limits": {
                     "memory": 512
                }
            }
          }
        ]
    }

响应示例：

    正常：200
    其他错误参见文档底部

### 启动服务

启动指定的服务

    PUT /v1/regions/{region}/services/{name}/start

请求示例:

    curl "https://api.tenxcloud.com/v1/regions/beijing1/services/service_name/start" -H "username:[user_name]" -H "Authorization: token [api_token]" -X PUT

响应示例：

    正常：200
    其他错误参见文档底部

### 停止服务

停止指定的服务

    PUT /v1/regions/{region}/services/{name}/stop

请求示例:

    curl "https://api.tenxcloud.com/v1/regions/beijing1/services/service_name/stop" -H "username:[user_name]" -H "Authorization: token [api_token]" -X PUT

响应示例：

    正常：200
    其他错误参见文档底部

### 重启服务

停止指定的服务

    PUT /v1/regions/{region}/services/{name}/restart

请求示例:

    curl "https://api.tenxcloud.com/v1/regions/beijing1/services/service_name/restart" -H "username:[user_name]" -H "Authorization: token [api_token]" -X PUT

响应示例：

    正常：200
    其他错误参见文档底部

### 获取服务日志

获取指定服务某天的日志

    GET /v1/regions/{region}/services/{name}/logs?date={date}&from={from_number}&size={total_size}

请求示例:

    curl "https://api.tenxcloud.com/v1/regions/beijing1/services/service_name/logs?date=2015.12.29&from=0&size=100" -H "username:[user_name]" -H "Authorization: token [api_token]"

响应示例：

    [
      {
        "instance_name": "instance1",
        "log": "message1"
      },
      {
        "instance_name": "instance1",
        "log": "message2"
      },
      ...
    ]
