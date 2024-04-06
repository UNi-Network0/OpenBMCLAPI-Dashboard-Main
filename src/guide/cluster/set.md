---
title: 节点设置
icon: circle-info
---

## Get 添加节点储存

GET /api/cluster/set/storage/add

添加节点储存

### 请求参数

| 名称       | 位置 | 类型   | 必选 | 中文名     | 说明       |
| ---------- | ---- | ------ | ---- | ---------- | ---------- |
| type | body | string | 是   | 储存类型 | 可选WebdavStorage/localstorage |
| username | body | string | 是   | Webdav用户名 | Webdav用户名 |
| password | body | string | 是   | Webdav密码 | Webdav密码 |
| endpoint | body | string | 是   | Webdav Endpoint | Webdav文件储存地址 |
| localpath | body | string | 是   | 本地储存地址 | 本地储存地址 |

> 返回示例

> 成功

```json
{
  "code": 200,
  "msg": "success",
  "data": "Wedbav-Storage" 

}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型    | 必选 | 约束 | 中文名 | 说明   |
| --------- | ------- | ---- | ---- | ------ | ------ |
| » code    | integer | true | none |        | 状态码 |
| » message | string  | true | none |        | 信息   |
| » data    | string  | true | none |        | data   |