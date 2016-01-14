# 服务实例

### 获取服务实例信息

获取某个服务对应的所有实例信息

    GET /v1/regions/{region}/services/{name}/instances

请求示例:

    curl "https://api.tenxcloud.com/v1/regions/beijing1/services/service_name/instances" -H "username:[user_name]" -H "Authorization: token [api_token]"

响应示例：

    [
      {
        "name": "test-6902b",
        "creationTimestamp": "2015-11-08T06:30:00Z",
        "containers": [
          {
            "image": "index.tenxcloud.com/tenxcloud/mysql",
            "command": [
              "/run.sh"
            ],
            "env": [
              {
                "name": "MYSQL_HOST",
                "value": "mysqlhost"
              },
              {
                "name": "MYSQL_USER",
                "value": "admin"
              },
              {
                "name": "MYSQL_PASS",
                "value": "password"
              }
            ],
            "ports_mapping": [
              {
                "container_port": 22,
                "protocol": "TCP",
                "service_port": 50237
              }
            ],
            "resource": {
              "cpu": "125m",
              "memory": "512Mi"
            },
            "volumeMounts": [
              {
                "name": "volume-name1",
                "mountPath": "/data"
              }
            ]
          }
        ],
        "volumes": [
          {
            "name", "volume-name1",
            "disk_name", "disk1",
            "fsType": "ext4",
            "is_read_only": false
          }
        ],
      },
      {
        "instance_name": "instance1",
        "log": "message2"
      }
    ]

### 获取服务实例日志

    GET /v1/regions/{region}/services/{name}/instances/{name}/logs?date={date}&from={from_number}&size={total_size}

请求示例:

    curl "https://api.tenxcloud.com/v1/regions/beijing1/services/service_name/instances/instance1/logs?date=2015.12.29&from=0&size=100" -H "username:[user_name]" -H "Authorization: token [api_token]"

响应示例：

    [
      "log_message1",
      "log_message2",
      "log_message3"
    ]

### 获取实例监控信息 - Available soon

    GET /v1/regions/{region}/services/{name}/instances/{name}/metrics?start_time={start_time}&end_time={end_time}&time_period=1m

time_period：采样监控数据的时间间隔，目前支持 1s, 1m, 5m, 15m, 30m

请求示例:

    curl "https://api.tenxcloud.com/v1/regions/beijing1/services/service_name/instances/instance1/metrics?start_time=2015.12.29-13:30:00&end_time=2015.12.29-13:32:00&time_period=1m" -H "username:[user_name]" -H "Authorization: token [api_token]"

响应示例：

    {
      "names": [
          "time",
          "cpu_utilization",
          "memory_usage",
          "rx_bytes",
          "tx_bytes"
      ],
      "values": [
          [
              "2015.12.29-13:30:00",
              0.012714308333173054,
              16072704,
              84560,
              45786
          ],
          [
              "2015.12.29-13:31:00",
              0.012715614990320428,
              16072704,
              84560,
              45786
          ],
          [
              "2015.12.29-13:32:00",
              0.01271685307576187,
              16072704,
              84560,
              45786
          ]
      ]
    }
