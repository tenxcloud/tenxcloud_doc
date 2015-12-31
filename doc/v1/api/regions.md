# 服务区信息

获取时速云平台上可用的系统集群信息，包括名称、状态等。

    GET /v1/regions

请求示例：

    curl "https://api.tenxcloud.com/v1/regions" -H "username:[user_name]" -H "Authorization: token [api_token]"

响应示例：

    {
        "regions": [
            {
                "name": "beijing1",
                "display_name", "北京1区",
                "status": "Running"
            },
            {
                "name": "beijing2",
                "display_name", "北京2区",
                "status": "Running"
            }
        ]
    }
