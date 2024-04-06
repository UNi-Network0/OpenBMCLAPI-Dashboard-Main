---
title: 节点相关
icon: circle-info
---


## Get 节点信息获取

GET /api/cluster/info

获取当前启用节点信息

> 返回示例

> 成功

```json
{
  "code": 200,
  "msg": "success",
  "data": "python-openbmclapi" 

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
