# API 服务状态

获取 API 服务的当前状态

    GET /v1/status

请求示例：

    curl https://api.tenxcloud.com/v1/status -H "username:[user_name]" -H "Authorization: token [api_token]"

响应示例：

    正常：200 OK (API is running)
    服务不可用： 503
