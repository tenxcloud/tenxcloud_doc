# 工作任务
### 获取工作任务列表

**注意：目前仅支持在北美（us）区运行工作任务**

获取用户在指定集群上的工作任务

    GET /v1/regions/{region}/jobs

请求示例：

    curl "https://api.tenxcloud.com/v1/regions/us/jobs" -H "username:[user_name]" -H "Authorization: token [api_token]"

响应示例：

    {
      "jobs": [
          {
            "metadata": {
              "name": "job",
              "namespace": "default",
              "selfLink": "/apis/batch/v1/namespaces/default/jobs/job",
              "uid": "11794165-1c18-11e6-9b6e-00259031e55c",
              "resourceVersion": "120120",
              "creationTimestamp": "2016-05-17T10:13:57Z",
              "labels": {
                "name": "job"
              }
            },
            "spec": {
              "parallelism": 1,
              "completions": 1,
              "selector": {
                "matchLabels": {
                  "controller-uid": "11794165-1c18-11e6-9b6e-00259031e55c"
                }
              },
              "template": {
                "metadata": {
                  "name": "job",
                  "creationTimestamp": null,
                  "labels": {
                    "controller-uid": "11794165-1c18-11e6-9b6e-00259031e55c",
                    "job-name": "job",
                    "name": "job"
                  }
                },
                "spec": {
                  "volumes": null,
                  "containers": [
                    {
                      "name": "job",
                      "image": "index.tenxcloud.com/tenxcloud/perl_job:latest",
                      "resources": {
                        "limits": {
                          "cpu": "125m",
                          "memory": "512Mi"
                        }
                      },
                      "terminationMessagePath": "/dev/termination-log",
                      "imagePullPolicy": "Always"
                    }
                  ],
                  "restartPolicy": "OnFailure",
                  "terminationGracePeriodSeconds": 30,
                  "dnsPolicy": "ClusterFirst",
                  "serviceAccountName": "",
                  "securityContext": {}
                }
              }
            },
            "status": {
              "conditions": [
                {
                  "type": "Complete",
                  "status": "True",
                  "lastProbeTime": "2016-05-17T10:16:19Z",
                  "lastTransitionTime": "2016-05-17T10:16:19Z"
                }
              ],
              "startTime": "2016-05-17T10:13:58Z",
              "completionTime": "2016-05-17T10:16:19Z",
              "succeeded": 1
            }
          }
       ]
    }

### 获取工作任务信息

获取用户指定工作任务的信息：

    GET /v1/regions/{region}/jobs/{job_name}

请求示例：

    curl "https://api.tenxcloud.com/v1/regions/us/jobs/myjob" -H "username:[user_name]" -H "Authorization: token [api_token]"

响应：

    {
      "instance_names": ["myjob-xycda"],
      "metadata": {
        "name": "myjob",
        "namespace": "default",
        "selfLink": "/apis/batch/v1/namespaces/default/jobs/myjob",
        "uid": "a8da9543-215e-11e6-9b6e-00259031e55c",
        "resourceVersion": "259227",
        "creationTimestamp": "2016-05-24T03:21:52Z",
        "labels": {
          "name": "myjob"
        }
      },
      "spec": {
        "parallelism": 1,
        "completions": 1,
        "selector": {
          "matchLabels": {
            "controller-uid": "a8da9543-215e-11e6-9b6e-00259031e55c"
          }
        },
        "template": {
          "metadata": {
            "name": "myjob",
            "creationTimestamp": null,
            "labels": {
              "controller-uid": "a8da9543-215e-11e6-9b6e-00259031e55c",
              "job-name": "myjob",
              "name": "myjob"
            }
          },
          "spec": {
            "volumes": null,
            "containers": [
              {
                "name": "myjob",
                "image": "index.tenxcloud.com/tenxcloud/perl_job:latest",
                "resources": {
                  "limits": {
                    "cpu": "125m",
                    "memory": "512Mi"
                  }
                },
                "terminationMessagePath": "/dev/termination-log",
                "imagePullPolicy": "Always"
              }
            ],
            "restartPolicy": "OnFailure",
            "terminationGracePeriodSeconds": 30,
            "dnsPolicy": "ClusterFirst",
            "serviceAccountName": "",
            "securityContext": {}
          }
        }
      },
      "status": {
        "conditions": [
          {
            "type": "Complete",
            "status": "True",
            "lastProbeTime": "2016-05-24T03:24:44Z",
            "lastTransitionTime": "2016-05-24T03:24:44Z"
          }
        ],
        "startTime": "2016-05-24T03:21:52Z",
        "completionTime": "2016-05-24T03:24:44Z",
        "succeeded": 1
      }
    }

注意：其中的 instance_name 稍后会用来查询工作任务实例的日志

### 创建工作任务
创建一个新的工作任务

    POST /v1/regions/{region}/jobs/{job_name}

请求示例：

    curl "https://api.tenxcloud.com/v1/regions/us/jobs/{job-name}" -H "username:[user_name]" -H "Authorization: token [api_token]" -H "Content-Type: application/json" -X POST --data @job.json

job.json示例：

    {
      "containers": [
        {
          "image": "index.tenxcloud.com/tenxcloud/perl_job:latest",
          "pull_always": true,
          "command": [
            "echo",
            "test-cmd"
          ],
          "env": [
            {
              "name": "KEY",
              "value": "value"
            }
          ],
          "ports": [
            { "port": 22, "protocol": "TCP" }
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
          ]
        }
      ],
      "volumes": [
        {
          "name": "volume-name1",
          "type": "host"
        }
      ],
      "sync_timezone": true
    }

响应将返回创建的工作任务的详细信息：

    {
      "job": {
        "metadata": {
          "name": "job-api",
          "namespace": "default",
          "selfLink": "/apis/batch/v1/namespaces/default/jobs/job-api",
          "uid": "b7ab995e-297d-11e6-a010-00259031e55c",
          "resourceVersion": "464351",
          "creationTimestamp": "2016-06-03T11:24:21Z",
          "labels": {
            "name": "job-api"
          }
        },
        "spec": {
          "parallelism": 1,
          "completions": 1,
          "selector": {
            "matchLabels": {
              "controller-uid": "b7ab995e-297d-11e6-a010-00259031e55c"
            }
          },
          "template": {
            "metadata": {
              "name": "job-api",
              "namespace": "default",
              "creationTimestamp": null,
              "labels": {
                "controller-uid": "b7ab995e-297d-11e6-a010-00259031e55c",
                "job-name": "job-api",
                "name": "job-api"
              }
            },
            "spec": {
              "volumes": [
                {
                  "name": "volume-name1",
                  "hostPath": {
                    "path": "/tenxcloud/app_data/nkwanglei8lrp/job/job-api/volume-name1"
                  }
                },
                {
                  "name": "tenxcloud-time-zone",
                  "hostPath": {
                    "path": "/etc/localtime"
                  }
                }
              ],
              "containers": [
                {
                  "name": "job-api",
                  "image": "index.tenxcloud.com/tenxcloud/perl_job:latest",
                  "command": [
                    "echo",
                    "test-cmd"
                  ],
                  "env": [
                    {
                      "name": "KEY",
                      "value": "value"
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
                    },
                    {
                      "name": "tenxcloud-time-zone",
                      "readOnly": true,
                      "mountPath": "/etc/localtime"
                    }
                  ],
                  "terminationMessagePath": "/dev/termination-log",
                  "imagePullPolicy": "Always"
                }
              ],
              "restartPolicy": "OnFailure",
              "terminationGracePeriodSeconds": 30,
              "dnsPolicy": "ClusterFirst",
              "serviceAccountName": "",
              "securityContext": {}
            }
          }
        },
        "status": {}
      }
    }

### 删除工作任务
删除用户的指定工作任务

    DELETE /v1/regions/{region}/jobs/{job-name}

请求示例：

    curl "https://api.tenxcloud.com/v1/regions/us/jobs/job-api" -H "username:[user_name]" -H "Authorization: token [api_token]" -X DELETE

响应示例：

200 OK

    {
      "jobName": "job-api"
    }


### 获取工作任务日志

获取指定工作任务的日志

    GET /v1/regions/{region}/jobs/{name}/instances/{instance_name}/logs?date={date}&from={from_number}&size={total_size}

请求示例:

    curl "https://api.tenxcloud.com/v1/regions/us/jobs/job-api/instances/job-api-wu5d0/logs?date=2015.12.29&from=0&size=100" -H "username:[user_name]" -H "Authorization: token [api_token]"

响应示例：

    [
      "log_message1",
      "log_message2",
      "log_message3"
    ]
