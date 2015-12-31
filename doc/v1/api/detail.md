# 使用详细说明

时速云开放 API 服务地址：

https://api.tenxcloud.com/

所有请求头部需要包含以下认证信息：

    username: [user_name]

    Authorization: token [api_token]

user_name 是用户注册时填写的用户名，也可以在用户基本信息中查看；api_token 可以通过“获取 API token"一节中介绍的步骤获得。

    注意：目前 API 版本 v1，在调用其他版本 API 时，请将 v1 替换为相应版本。


API 详细说明:
   * [API 服务状态](status.md)
   * [用户信息](auth.md)
   * [服务区信息](regions.md)
   * [服务](services.md)
   * [服务实例](instances.md)

### 存储
Coming...

### 镜像服务
Coming...

### 代码构建、集成
Coming...

### 主机管理
Coming...

#### API 在各种错误情况，会返回对应的 HTTP code

400	Bad Request：语义或请求参数有误

401	Unauthorized：认证错误，access token 不合法或已过期

403 Forbidden：身份验证失败，没有足够的权限进行操作

404	Not Found：调用的 API 不存在

405	Method Not Allowed：请求方法错误， 请检查 HTTP 请求的 method 是否同文档介绍相符

500	Internal Server Error：服务内部错误，请开工单咨询

503	Service Unavailable：API 服务暂不可用，请稍候重试

