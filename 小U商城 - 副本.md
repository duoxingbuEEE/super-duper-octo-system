

## 1.入门

### 1.1 快速开始

#### 介绍

小U商城移动端项目是优就业 web教研室五室讲师与2020年进行开发，项目上使用前后端分离，由web教研室三室提供商城数据接口，由web教研室四室提供商城后台管理系统。

#### 系统要求

##### 开发工具

 微信小程序IDE+其他厂家小程序IDE+HBuilderX-IDE+手机模拟器

##### 硬件要求

测试环境基本要求：window7  window10系统即可

##### 软件要求

需要自行安装 mysql5.6、vue-cli、node、npm

需要启动 mysql-server、商城数据接口服务  、后台商城管理系统服务

#### 项目结构说明

```python
shop_U 项目框架目录
	common 公共代码目录
    	css:项目样式目录
         js:项目公共js目录
    components 项目公共页面组件目录
    pages 项目页面目录
    	index:商城首页文件
        classify:商品分类文件
        product:商品列表文件
        details:商品详情文件
        cart:购物车文件
        confirm:订单确认文件
       	order:订单详情文件
        mine:个人中心文件
        login:登录文件
        smssend:短信登录文件
        search:商品搜索文件   
    static 静态文件目录
    	index:首页静态目录
        classify:商品分类静态目录
        detail:商品详情静态目录
        mine:个人中心静态目录
        tabbar:选项卡静态目录
    unpackage 项目各平台运行包目录
    	dist:各平台项目运行包目录
            dev:各平台本地测试运行包目录
            build:各平台正式发行包目录
    utils 常用工具类目录
    	ActionImage.js:图片自适应处理文件
        api.js:常用api文件
        config:项目配置文件文件
        request.js:项目网络请求文件
    app.vue 项目根组件
    main.js 项目入口文件
    mainfest.json:多端配置文件
    pages.json:项目全局配置文件
    uni.css:常用css样式变量文件
```

#### 联系我们

作者：web教研室 五室

### 1.2 环境搭建

#### 小程序开发工具

微信小程序工具下载地址:https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

百度小程序工具下载地址：https://smartprogram.baidu.com/docs/develop/devtools/history/

支付宝小程序工具下载地址：https://opendocs.alipay.com/mini/ide/downloa

其他平台去其对应官方平台查找即可,这里以微信小程序为主

下载完默认安装即可

#### 安装HBuildX工具

下载地址：https://www.dcloud.io/hbuilderx.htm

下载完默认安装即可

![C:\Users\zhangbin\Desktop\小u商城](C:\Users\zhangbin\Desktop\小u商城\QQ截图20200906162502.png)

#### 安装手机模拟器

下载地址：https://www.ldmnq.com/

下载完默认安装即可

![](C:\Users\zhangbin\Desktop\小u商城\QQ截图20200906162926.png)



#### 安装node

下载地址：https://nodejs.org/en/download/

下载完默认安装即可

查看node版本号

```
node --version
```

注册淘宝镜像（为了提高下载速度）

```
npm config set registry "https://registry.npm.taobao.org" 
```

配置后可通过下面方式来验证是否成功

```
npm config get registry
```

注意按node时候会自动安装npm，所以npm无需单独安装。

#### 安装vue-cli脚手架

```
npm install -g @vue/cli
```

查看vue-cli版本号

```
vue -V
```

#### 安装mysql服务器

下载地址：https://dev.mysql.com/downloads/mysql/

安装参考地址：https://blog.csdn.net/qq_42543312/article/details/81543753

安装配置好服务可以自启，不需要每次手动启动

#### 启动商城数据接口服务

注意首先运行mysql数据库服务

进入接口项目根目录下执行

```
E:\第五阶段新课补充\小U商城\小u商城接口\shop-api>npm start
```

#### 启动商城后台管理系统

进入项目根目录下执行

```
E:\第五阶段新课补充\小U商城\小u商城接口\shop-admin>npm start
```

### 1.3功能列表

| 功能大类   | 功能点       | 描述                           | 完成情况 |
| ---------- | ------------ | ------------------------------ | :------: |
| 商品模块   | 商品分类     | 展示商品所有分类详情           |  已完成  |
| 商品模块   | 商品列表     | 返回对应分类下的商品列表       |  已完成  |
| 商品模块   | 商品详情     | 返回对应商品详情数据           |  已完成  |
| 商品模块   | 添加购物车   | 商品添加购物车                 |  已完成  |
| 商品模块   | 秒杀详情     | 返回当天秒杀信息               |  已完成  |
| 商品模块   | 推荐数据     | 返回商品推荐数据               |  已完成  |
| 搜索模块   | 数据搜索     | 返回符合条件商品数据类表       |  已完成  |
| 搜索模块   | 搜索历史     | 提供有效搜索历史数据           |  已完成  |
| 购物车模块 | 状态管理     | 实现商品单选全选反选           |  已完成  |
| 购物车模块 | 数量管理     | 实现购物车商品数量添加删除操作 |  已完成  |
| 购物车模块 | 订单生成     | 根据用户操作生成订单信息       |  已完成  |
| 订单模块   | 商品数量管理 | 实现购买商品数据添加删除操作   |  已完成  |
| 会员模块   | 登录管理     | 基于阿里云短信实现登录注册     |  已完成  |
| 会员模块   | 验证码获取   | 获取登录验证码                 |  已完成  |
| 会员模块   | 订单管理     | 用户在个人中心可以查看订单详情 |  已完成  |

## 2.接口能力

### 2.1  接口清单

#### 2.1.1接口说明

我们只梳理了比较重要的接口协议，其他如果需要请自行查看代码梳理协议

#### 2.1.2 接口清单

| 接口名称         | 调用地址                                        | 调用方式 |
| ---------------- | ----------------------------------------------- | -------- |
| 短信发送         | http://localhost:3000/api/sms                   | GET      |
| 用户登录         | http://localhost:3000/api/wxlogin               | GET      |
| 检测token        | http://localhost:3000/api/checktoken            | GET      |
| 首页导航分类     | http://localhost:3000/api/getcate               | GET      |
| 首页分类详情     | http://localhost:3000/api/getcates              | GET      |
| 首页轮播图       | http://localhost:3000/api/getbanner             | GET      |
| 首页秒杀详情     | http://localhost:3000/api/getseckill            | GET      |
| 首页推荐商品     | http://localhost:3000/api/getindexgoods         | GET      |
| 商品搜索         | http://localhost:3000/api/search                | GET      |
| 一级分类商品列表 | http://localhost:3000/api/getcategoodPage       | GET      |
| 二级分类商品列表 | http://localhost:3000/api/getsecondcategoodPage | GET      |
| 商品详情         | http://localhost:3000/api/getgoodsinfo          | GET      |
| 加入购物车       | http://localhost:3000/api/cartadd               | POST     |
| 删除购物车       | http://localhost:3000/api/cartdelete            | POST     |
| 修改购物车       | http://localhost:3000/api/cartedit              | POST     |
| 查询购物车       | http://localhost:3000/api/cartlist              | GET      |
| 订单生成         | http://localhost:3000/api/orderadd              | POST     |
| 订单查询         | http://localhost:3000/api/orderlist             | GET      |

### 2.2用户类接口

#### 2.2.1 说明

用户类结构一共包括：获取短信验证码、用户登录、登录有效期检测。

#### 2.2.2 验证码获取

##### 接口功能

获取登录短信验证码

##### URL

http://localhost:3000/api/sms

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述       | 取值说明           |
| -------- | ---- | ------ | ---- | ---------- | ------------------ |
| phone    | 1    | String | 11   | 用户手机号 | 符合大陆手机号规则 |

##### 返回数据

数据格式

```
{
    "msg": "获取成功",
    "code": 200,
        "list": {
        "code": 6340
    }
}
```

| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 发送成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 发送失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：
{
	phone: 13716052241
}
响应报文
{
    "msg": "获取成功",
    "code": 200,
        "list": {
        "code": 6340
    }
}
```



#### 2.2.3 用户登录

##### 接口功能

用户使用短信登录

##### URL

http://localhost:3000/api/wxlogin

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述       | 取值说明           |
| -------- | ---- | ------ | ---- | ---------- | ------------------ |
| phone    | 1    | String | 11   | 用户手机号 | 获取验证码的手机号 |

返回数据

数据格式

```
{
    "msg": "登录成功",
    "code": 200,
    "list": {
        "token": "eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=............",
        "uid": "cf431060-94e2-11ea-a222-2d7506ebb3ac",
        "phone": "13716052241"
    }
}
```

| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 登录成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 登录失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：
{
	phone: 13716052241
}
响应报文
{
    "msg": "登录成功",
    "code": 200,
    "list": {
        "token": "eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=............",
        "uid": "cf431060-94e2-11ea-a222-2d7506ebb3ac",
        "phone": "13716052241"
    }
}
```

#### 2.2.4token检测

##### 接口功能

检测登录有效性

##### URL

http://localhost:3000/api/checktoken

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称      | 参数值           |
| ------------- | ---------------- |
| content-Type  | application/json |
| authorization | token            |

返回数据

数据格式

```
{
    "code": 200
    "list": null
    "msg": "登录有效"
}
```



| 状态码 | 描述                          |
| ------ | ----------------------------- |
| 200    | 登录有效                      |
| 403    | 登录已过期或访问权限受限      |
| 500    | 请设置请求头,并携带验证字符串 |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization: eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldU.......
请求报文：{}
响应报文
{
    "code": 200
    "list": null
    "msg": "登录有效"
}
```



### 2.3 商品分类接口

##### 2.3.1 说明

商品分类接口主要有首页一级分类导航数据、首页全部商品分类。

##### 2.3.2 一级商品分类

##### 接口功能

已经注册成为平台用户的账号申请店铺

##### URL

  http://localhost:3000/api/getcate

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 返回数据

数据格式

```
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
        "id": 1,
        "pid": 0,
        "catename": "家用电器",
        "img": "",
        "status": 1
        },
        {
        "id": 2,
        "pid": 0,
        "catename": "手机通讯",
        "img": "",
        "status": 1
        }
        ...........
    ]
}
```

| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 查询失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：{}
响应报文
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
        "id": 1,
        "pid": 0,
        "catename": "家用电器",
        "img": "",
        "status": 1
        },
        {
        "id": 2,
        "pid": 0,
        "catename": "手机通讯",
        "img": "",
        "status": 1
        }
        ...........
    ]
}
```

##### 2.3.3 全部商品分类 

##### 接口功能

商品分类详情

URL

http://localhost:3000/api/getcates

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 返回数据

数据格式

```
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
            "id": 1,
            "pid": 0,
            "catename": "家用电器",
            "img": "",
            "status": 1,
            "children": [
                {
                "id": 7,
                "pid": 1,
                "catename": "电视",
                "img": "/uploads/category/fc3abc50-6c2c-11ea-b86c-579aced212c2.jpg",
                "status": 1
                },
                {
                "id": 8,
                "pid": 1,
                "catename": "空调",
                "img": "/uploads/category/354b31f0-6c2d-11ea-b86c-579aced212c2.jpg",
                "status": 1
                },
                {
                "id": 9,
                "pid": 1,
                "catename": "洗衣机",
                "img": "/uploads/category/436e9470-6c2d-11ea-b86c-579aced212c2.jpg",
                "status": 1
                }
            ]
        }
 	............................
    ]
}
```

| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 查询失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：{}
响应报文
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
            "id": 1,
            "pid": 0,
            "catename": "家用电器",
            "img": "",
            "status": 1,
            "children": [
                {
                "id": 7,
                "pid": 1,
                "catename": "电视",
                "img": "/uploads/category/fc3abc50-6c2c-11ea-b86c-579aced212c2.jpg",
                "status": 1
                },
                {
                "id": 8,
                "pid": 1,
                "catename": "空调",
                "img": "/uploads/category/354b31f0-6c2d-11ea-b86c-579aced212c2.jpg",
                "status": 1
                },
                {
                "id": 9,
                "pid": 1,
                "catename": "洗衣机",
                "img": "/uploads/category/436e9470-6c2d-11ea-b86c-579aced212c2.jpg",
                "status": 1
                }
            ]
        }
 	............................
    ]
}
```

#### 2.4轮播图

##### 2.4.1说明

轮播图接口主要获取首页轮播图数据

##### 2.4.1 轮播图详情

##### 接口功能

获取首页轮播图数据

##### URL

http://localhost:3000/api/getbanner

##### 支持格式

JSON

##### HTTP请求方式

GET

请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 返回数据

数据格式

```
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
        "id": 1,
        "title": "轮播图1",
        "img": "/uploads/banner/8f581960-7033-11ea-90dd-3b8abd26afb2.jpg",
        "status": 1
        },
        {
        "id": 2,
        "title": "轮播图2",
        "img": "/uploads/banner/972ca570-7033-11ea-90dd-3b8abd26afb2.jpg",
        "status": 1
        }
    ]
}
```

| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 查询失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：{}
响应报文
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
        "id": 1,
        "title": "轮播图1",
        "img": "/uploads/banner/8f581960-7033-11ea-90dd-3b8abd26afb2.jpg",
        "status": 1
        },
        {
        "id": 2,
        "title": "轮播图2",
        "img": "/uploads/banner/972ca570-7033-11ea-90dd-3b8abd26afb2.jpg",
        "status": 1
        }
    ]
}
```



### 2.5 商品数据

##### 2.5.1 说明

商品接口主要有首页秒杀商品信息、推荐商品信息、商品详情、商品搜索。

##### 2.5.2 秒杀商品

##### 接口功能

首页秒杀商品信息

##### URL

  http://localhost:3000/api/getseckill

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 返回数据

数据格式

```
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
        "id": 6,
        "title": "活动2",
        "begintime": "1599408000000",
        "endtime": "1599492300000",
        "first_cateid": 2,
        "second_cateid": 10,
        "goodsid": 4,
        "status": 1,
        "img": "/uploads/fb704ec0-70be-11ea-91a2-9395060d7390.jpg",
        "price": 3999
        }
    ]
}
```

| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 查询失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：{}
响应报文
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
        "id": 6,
        "title": "活动2",
        "begintime": "1599408000000",
        "endtime": "1599492300000",
        "first_cateid": 2,
        "second_cateid": 10,
        "goodsid": 4,
        "status": 1,
        "img": "/uploads/fb704ec0-70be-11ea-91a2-9395060d7390.jpg",
        "price": 3999
        }
    ]
}
```



##### 2.5.3 推荐商品

##### 接口功能

首页推荐商品信息

##### URL

http://localhost:3000/api/getindexgoods

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 返回数据

数据格式

```
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
            "content": [
                {
                    "id": 1,
                    "goodsname": "小米10",
                    "price": 3999,
                    "market_price": 3999,
                    "img": "/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                },
                {
                    "id": 5,
                    "goodsname": "华为MateBook13",
                    "price": 4299,
                    "market_price": 4597,
                    "img": "/uploads/1faae7a0-70bf-11ea-91a2-9395060d7390.jpg"
                }
             ]
         },
    	{
            "content": [
                {
                    "id": 2,
                    "goodsname": "联想小新",
                    "price": 4499,
                    "market_price": 4699,
                    "img": "/uploads/2747d670-6de1-11ea-a8e1-0d680bf54839.jpg"
                }
            ]
    	},
    	{
            "content": [
                {
                    "id": 1,
                    "goodsname": "小米10",
                    "price": 3999,
                    "market_price": 3999,
                    "img": "/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                }
        	]
    	}
    ]
}
```

| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 查询失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文 {}
响应报文
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
            "content": [
                {
                    "id": 1,
                    "goodsname": "小米10",
                    "price": 3999,
                    "market_price": 3999,
                    "img": "/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                },
                {
                    "id": 5,
                    "goodsname": "华为MateBook13",
                    "price": 4299,
                    "market_price": 4597,
                    "img": "/uploads/1faae7a0-70bf-11ea-91a2-9395060d7390.jpg"
                }
             ]
         },
    	{
            "content": [
                {
                    "id": 2,
                    "goodsname": "联想小新",
                    "price": 4499,
                    "market_price": 4699,
                    "img": "/uploads/2747d670-6de1-11ea-a8e1-0d680bf54839.jpg"
                }
            ]
    	},
    	{
            "content": [
                {
                    "id": 1,
                    "goodsname": "小米10",
                    "price": 3999,
                    "market_price": 3999,
                    "img": "/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                }
        	]
    	}
    ]
}
```



##### 2.5.4 商品详情

##### 接口功能

获取商品详情信息

##### URL

http://localhost:3000/api/getgoodsinfo

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述   | 取值说明         |
| -------- | ---- | ------ | ---- | ------ | ---------------- |
| id       | 1    | number | 10   | 商品id | 商品编号，必填项 |

##### 返回数据

数据格式

```
{
    "msg": "获取成功",
    "code": 200,
    "list": [
        {
            "id": 4,
            "first_cateid": 2,
            "second_cateid": 10,
            "goodsname": "华为matep30",
            "price": 3999,
            "market_price": 4999,
            "img": "/uploads/fb704ec0-70be-11ea-91a2-9395060d7390.jpg",
            "description": "",
            "specsid": 3,
            "specsattr": "黑色",
            "isnew": 2,
            "ishot": 2,
            "status": 1,
            "number": 100,
            "specsname": "颜色"
        }
    ]
}
```

| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 缺少商品id       |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：
{		
	id:4
}
响应报文
{
    "msg": "获取成功",
    "code": 200,
    "list": [
        {
            "id": 4,
            "first_cateid": 2,
            "second_cateid": 10,
            "goodsname": "华为matep30",
            "price": 3999,
            "market_price": 4999,
            "img": "/uploads/fb704ec0-70be-11ea-91a2-9395060d7390.jpg",
            "description": "",
            "specsid": 3,
            "specsattr": "黑色",
            "isnew": 2,
            "ishot": 2,
            "status": 1,
            "number": 100,
            "specsname": "颜色"
        }
    ]
}
```

##### 2.5.5 商品搜索

##### 接口功能

搜索获取商品列表

##### URL

http://localhost:3000/api/search

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述       | 取值说明       |
| -------- | ---- | ------ | ---- | ---------- | -------------- |
| keywords | 1    | String | 5    | 搜索关键词 | 中文字符，必填 |

##### 返回数据

数据格式

```
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
            "id": 1,
            "goodsname": "小米10",
            "price": 3999,
            "market_price": 3999,
            "img": "/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
        }
    ]
}
```



| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 缺少搜索关键词   |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：
{		
	keywords:小米
}
响应报文
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
            "id": 1,
            "goodsname": "小米10",
            "price": 3999,
            "market_price": 3999,
            "img": "/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
        }
    ]
}
```

### 2.6商品列表

#### 2.6.1 说明

商品列表包括一级分类商品列表、二级分类商品列表。

#### 2.6.2 一级分类商品列表 

##### 接口功能

获取一级分类下商品列表

##### URL

http://localhost:3000/api/getcategoodPage

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述           | 取值说明         |
| -------- | ---- | ------ | ---- | -------------- | ---------------- |
| fid      | 1    | number | 10   | 一级商品分类id | 一级分类id,必填  |
| page     | 1    | number | -    | 页码           | 页码,必填        |
| size     | 1    | number | -    | 分页偏移量     | 分页偏移量，必填 |

##### 返回数据

数据格式

```
{
"msg": "操作成功",
"code": 200,
"list": [
    		1,
    	[
            {
                "id": 1,
                "goodsname": "小米10",
                "price": 3999,
                "market_price": 3999,
                "img": "/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
            },
            {
                "id": 3,
                "goodsname": "荣耀9X",
                "price": 1299,
                "market_price": 1399,
                "img": "/uploads/d6a0eff0-70be-11ea-91a2-9395060d7390.jpg"
            }
    	]
    ]
}
```



| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 查询失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：
{
    fid: 2
    page: 1
    size: 5
}
响应报文
{
"msg": "操作成功",
"code": 200,
"list": [
    	1,
    	[
            {
                "id": 1,
                "goodsname": "小米10",
                "price": 3999,
                "market_price": 3999,
                "img": "/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
            },
            {
                "id": 3,
                "goodsname": "荣耀9X",
                "price": 1299,
                "market_price": 1399,
                "img": "/uploads/d6a0eff0-70be-11ea-91a2-9395060d7390.jpg"
            }
    	]
    ]
}
```

#### 2.6.3 二级分类商品列表 

##### 接口功能

获取二级分类下商品列表

##### URL

http://localhost:3000/api/getsecondcategoodPage

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| :----------- | :--------------- |
| content-Type | application/json |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述           | 取值说明         |
| :------- | :--- | :----- | :--- | :------------- | :--------------- |
| sid      | 1    | number | 10   | 二级商品分类id | 二级分类id,必填  |
| page     | 1    | number | -    | 页码           | 页码,必填        |
| size     | 1    | number | -    | 分页偏移量     | 分页偏移量，必填 |

##### 返回数据

数据格式

```
{
"msg": "操作成功",
"code": 200,
"list": [
    		1,
    	[
            {
                "id": 1,
                "goodsname": "小米10",
                "price": 3999,
                "market_price": 3999,
                "img": "/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
            },
            {
                "id": 3,
                "goodsname": "荣耀9X",
                "price": 1299,
                "market_price": 1399,
                "img": "/uploads/d6a0eff0-70be-11ea-91a2-9395060d7390.jpg"
            }
    	]
    ]
}
```



| 状态码 | 描述             |
| :----- | :--------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 查询失败         |

##### 举例

```vue
请求头信息：
Content-Type:application/json
请求报文：
{
    sid: 12
    page: 1
    size: 5
}
响应报文
{
"msg": "操作成功",
"code": 200,
"list": [
    	1,
    	[
            {
                "id": 1,
                "goodsname": "小米10",
                "price": 3999,
                "market_price": 3999,
                "img": "/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
            },
            {
                "id": 3,
                "goodsname": "荣耀9X",
                "price": 1299,
                "market_price": 1399,
                "img": "/uploads/d6a0eff0-70be-11ea-91a2-9395060d7390.jpg"
            }
    	]
    ]
}
```

### 2.7 购物车

#### 2.7.1 购物车列表

##### 接口功能

获取用户的购物车数据

##### URL

 http://localhost:3000/api/cartlist

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称      | 参数值           |
| ------------- | ---------------- |
| content-Type  | application/json |
| authorization | token            |

##### 求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述   | 取值说明       |
| :------- | :--- | :----- | :--- | :----- | :------------- |
| uid      | 1    | string | 50   | 用户id | 用户编号，必填 |

##### 返回数据

数据格式

```
{
	"msg":"操作成功",
    "code":200,
    "list":[
        {
            "id":2,
            "uid":"6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
            "goodsid":1,
            "num":1,
            "status":1,
            "goodsname":"小米10",
            "price":3999,
            "img":"/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
        },
        {
            "id":3,
            "uid":"6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
            "goodsid":5,
            "num":1,
            "status":1,
            "goodsname":"华为MateBook13",
            "price":4299,
            "img":"/uploads/1faae7a0-70bf-11ea-91a2-9395060d7390.jpg"
        }
    ]
}
```



| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 缺少参数         |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：{
	uid: 6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe
}
响应报文
{
	"msg":"操作成功",
    "code":200,
    "list":[
        {
            "id":2,
            "uid":"6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
            "goodsid":1,
            "num":1,
            "status":1,
            "goodsname":"小米10",
            "price":3999,
            "img":"/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
        },
        {
            "id":3,
            "uid":"6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
            "goodsid":5,
            "num":1,
            "status":1,
            "goodsname":"华为MateBook13",
            "price":4299,
            "img":"/uploads/1faae7a0-70bf-11ea-91a2-9395060d7390.jpg"
        }
    ]
}
```

#### 2.7.2添加购物车

##### 接口功能

添加购物车数据

##### URL

 http://localhost:3000/api/cartadd

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称      | 参数值           |
| ------------- | ---------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述     | 取值说明       |
| -------- | ---- | ------ | ---- | -------- | -------------- |
| uid      | 1    | string | 50   | 用户id   | 用户编号，必填 |
| goodsid  | 1    | number | 10   | 商品id   | 商品编号，必填 |
| num      | 1    | number | 3    | 商品数量 | 商品数量，必填 |

##### 返回数据

数据格式

```
{
	msg: "添加成功"
    code: 200
    list: []
}
```



| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 添加成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 缺少参数         |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
    uid: "6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe"
    goodsid: 7
    num: 1
}
响应报文
{
	msg: "添加成功"
    code: 200
    list: []
}
```

#### 2.7.3修改购物车

##### 接口功能

添加购物车数据

##### URL

 http://localhost:3000/api/cartedit

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称      | 参数值           |
| :------------ | :--------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述         | 取值说明             |
| :------- | :--- | :----- | :--- | :----------- | :------------------- |
| id       | 1    | number | 10   | 购物车数据id | 数据编号，必填       |
| type     | 1    | number | 1    | 操作类型     | 1是减少2是增加，必填 |

##### 返回数据

数据格式

```
{
	msg: "操作成功"
    code: 200
    list: []
}
```



| 状态码 | 描述             |
| :----- | :--------------- |
| 200    | 操作成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 缺少参数         |

##### 举例

```json
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
    id: 2
	type: 2
}
响应报文
{
	msg: "操作成功"
    code: 200
    list: []
}
```



#### 2.7.4删除购物车

##### 接口功能

删除购物车数据

##### URL

 http://localhost:3000/api/cartdelete

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称      | 参数值           |
| :------------ | :--------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述         | 取值说明       |
| :------- | :--- | :----- | :--- | :----------- | :------------- |
| id       | 1    | number | 10   | 购物车数据id | 数据编号，必填 |

##### 返回数据

数据格式

```
{
	msg: "删除成功"
    code: 200
    list: []
}
```



| 状态码 | 描述             |
| :----- | :--------------- |
| 200    | 删除成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 缺少参数         |

##### 举例

```json
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
    id: 2
}
响应报文
{
	msg: "删除成功"
    code: 200
    list: []
}
```

### 

### 2.8 订单接口

#### 2.8.1 说明

订单接口一共包括：订单生成、订单查询

#### 2.8.2 订单生成 

##### 接口功能

生成支付订单

##### URL

 http://localhost:3000/api/orderadd

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称      | 参数值           |
| ------------- | ---------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

注意请求整体参数结构如下：

```
params: "{
            "uid":"6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
            "username":"YouSu",
            "userphone":"18240279221",
            "useraddress":"北京市海淀区隐泉路清林苑6号楼中公优就业总部3层",
            "countmoney":10598,
            "countnumber":2,
            "addtime":1599567240994
		}"
idstr: "8,4"
```

参数详情：

| 参数名称    | 约束 | 类型            | 长度 | 描述           | 取值说明                      |
| ----------- | ---- | --------------- | ---- | -------------- | ----------------------------- |
| uid         | 1    | String          | 50   | 用户ID         | 用户编号，必填                |
| username    | 1    | String          | 10   | 收获人         | 必填                          |
| userphone   | 1    | String          | 11   | 收货人联系方式 | 符合大陆手机号规范，必填      |
| useraddress | 1    | String          | 50   | 地址           | 省市区，乡镇街道，必填        |
| countmoney  | 1    | decimal（10,2） | 10   | 支付金额       | 保留两位小数点，必填          |
| countnumber | 1    | number          | 5    | 购买商品数量   | 必填                          |
| addtime     | 1    | datetime        |      | 订单生成时间   | 必填                          |
| idstr       | 1    | String          | 20   | 购物车数据id   | 必须为字符串如：“1,2,3”, 必填 |

##### 返回数据

数据格式

```
{
    "msg":"提交订单成功",
    "code":200,
    "list":[]
}
```



| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 提交订单成功     |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 缺少参数         |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
		params: "{
                "uid":"6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
                "username":"YouSu",
                "userphone":"18240279221",
                "useraddress":"北京市海淀区隐泉路清林苑6号楼中公优就业总部3层",
                "countmoney":10598,
                "countnumber":2,
                "addtime":1599567240994
            }"
		idstr: "8,4"
}
响应报文
{
    "msg":"提交订单成功",
    "code":200,
    "list":[]
}
```

#### 2.8.3订单详情

##### 接口功能

获取用户订单详情

##### URL

 http://localhost:3000/api/orderlist

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称      | 参数值           |
| :------------ | :--------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述   | 取值说明       |
| :------- | :--- | :----- | :--- | :----- | :------------- |
| uid      | 1    | String | 50   | 用户ID | 用户编号，必填 |

##### 返回数据

数据格式

```
{
    "msg":"操作成功",
    "code":200,
    "list":[
        {
            "id":49,
            "countmoney":10598,
            "countnumber":2,
            "child":[
                {
                    "goodsname":"华为MateBook15",
                    "img":"/uploads/1faae7a0-70bf-11ea-91a2-9395060d7390.jpg"
                },
                {
                    "goodsname":"华为MateBook13",
                    "img":"/uploads/1faae7a0-70bf-11ea-91a2-9395060d7390.jpg"
                }
            ]
        },
        {
            "id":51,
            "countmoney":3999,
            "countnumber":1,
            "child":[
                {
                    "goodsname":"小米10",
                    "img":"/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                },
                {
                    "goodsname":"小米10",
                    "img":"/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                },
                {
                    "goodsname":"小米10",
                    "img":"/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                },
                {
                    "goodsname":"小米10",
                    "img":"/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                }
            ]
        },
        {
            "id":52,
            "countmoney":4299,
            "countnumber":1,
            "child":[
                {
                    "goodsname":"华为MateBook13",
                    "img":"/uploads/1faae7a0-70bf-11ea-91a2-9395060d7390.jpg"
                }
            ]
        },
        {
            "id":53,
            "countmoney":3999,
            "countnumber":1,
            "child":[
                {
                    "goodsname":"小米10",
                    "img":"/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                }
            ]
        }
    ]
}
```



| 状态码 | 描述             |
| :----- | :--------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 缺少参数         |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
	uid: 6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe
}
响应报文
{
    "msg":"操作成功",
    "code":200,
    "list":[
        {
            "id":49,
            "countmoney":10598,
            "countnumber":2,
            "child":[
                {
                    "goodsname":"华为MateBook15",
                    "img":"/uploads/1faae7a0-70bf-11ea-91a2-9395060d7390.jpg"
                },
                {
                    "goodsname":"华为MateBook13",
                    "img":"/uploads/1faae7a0-70bf-11ea-91a2-9395060d7390.jpg"
                }
            ]
        },
        {
            "id":51,
            "countmoney":3999,
            "countnumber":1,
            "child":[
                {
                    "goodsname":"小米10",
                    "img":"/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                },
                {
                    "goodsname":"小米10",
                    "img":"/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                },
                {
                    "goodsname":"小米10",
                    "img":"/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                },
                {
                    "goodsname":"小米10",
                    "img":"/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                }
            ]
        },
        {
            "id":52,
            "countmoney":4299,
            "countnumber":1,
            "child":[
                {
                    "goodsname":"华为MateBook13",
                    "img":"/uploads/1faae7a0-70bf-11ea-91a2-9395060d7390.jpg"
                }
            ]
        },
        {
            "id":53,
            "countmoney":3999,
            "countnumber":1,
            "child":[
                {
                    "goodsname":"小米10",
                    "img":"/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                }
            ]
        }
    ]
}
```



#### 

## 技术支持

### 变更历史

| 版本  | 变更内容 | 变更时间   | 变更人员      |
| ----- | -------- | ---------- | ------------- |
| v0.01 | 初稿     | 2020-08-20 | web第五教研室 |





​	