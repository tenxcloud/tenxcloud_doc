# 用户信息

获取用户信息，包括用户名、邮件地址、电话等基本信息。

    GET /v1/auth


请求示例：

    curl "https://api.tenxcloud.com/v1/auth" -H "username:[user_name]" -H "Authorization: token [api_token]"

响应示例：

    {
      "user_name": "user",
      "email": "user@tenxcloud.com",
      "phone": "158xxxxxxxx",
      "creation_time": "2015-12-28 16:05:06",
      "last_login_time": "2015-12-28 16:06:12",
    }
