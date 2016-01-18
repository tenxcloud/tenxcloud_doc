# 服务区信息

获取时速云平台上可用的系统集群信息，包括名称、状态等，服务、实例等API需要使用 region 信息时，请使用返回结果中的 name 字段作为 region 标示。

    GET /v1/regions

请求示例：

    curl "https://api.tenxcloud.com/v1/regions" -H "username:[user_name]" -H "Authorization: token [api_token]"

响应示例：

    {
        "regions": [
            {
                "display_name", "北京1区",
                "name": "beijing1",
                "status": "Running"
            },
            {
                "display_name", "北京2区",
                "name": "beijing2",
                "status": "Running"
            }
        ]
    }
