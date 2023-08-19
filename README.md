
# godoDb

## 特点
godoDb数据库设计器，是一款mysql数据库管理工具。

- 支持数据库备份还原，支持添加数据库；
- 支持自动生成数据库设计文档，md 格式以及实时预览，可以下载成 pdf/word文件；
- 支持数据表名/注释/autoid 的更改，支持优化表/修复表/删除表/清空表；
- 可查看/编辑/新增/复制任意表数据；
- 可执行sql文件，并查看执行后的数据结果；
- 可更改字段名/注释/默认值/排序，可拖拽排序字段，可删除字段；
- 支持连接/管理多个外部数据库，可通过ssh连接外部数据库，可导入pem文件连接；
- 支持数据库表保护；
- 精细化的权限控制，多角色多用户管理；
- 可查询每个用户的操作记录，方便回查；

## 项目地址
[gitee](https://gitee.com/ruitao_admin/gododb)

[github](https://github.com/phpk/gododb)

## 安装

```
pnpm i

```
- 导入data/gododb.sql数据库文件，并修改src/config/adapter.js数据库配置信息

## 启动服务

```
npm start
```

## 正式环境部署

```
pm2 start pm2.json
# pm2 reload pm2.json //reload
```
- 账号：admin
- 密码：admin 

## 演示图片

![输入图片说明](docs/1.jpg)
![输入图片说明](docs/2.jpg)
![输入图片说明](docs/3.jpg)
![输入图片说明](docs/4.jpg)
![输入图片说明](docs/5.jpg)
![输入图片说明](docs/6.jpg)
![输入图片说明](docs/7.jpg)
![输入图片说明](docs/8.jpg)
![输入图片说明](docs/9.jpg)

## 支持sqlite
- 库有点大，耐心等待下载
```
pnpm i think-model-sqlite -s
```
- 打开src/config/adapter.js第五行注释
```
const sqlite = require('think-model-sqlite');
```
- 以及第49行到55行注释
```
 sqlite: {
    handle: sqlite, // Adapter handle
    path: path.join(think.ROOT_PATH, 'data/sqlite'), // sqlite 保存的目录
    database: 'gododb', // 数据库名
    connectionLimit: 1, // 连接池的连接个数，默认为 1
    prefix: 'rt_', // 数据表前缀，如果一个数据库里有多个项目，那项目之间的数据表可以通过前缀来区分
  }
```
- 重启程序


## 微信群
![微信群](https://gitee.com/ruitao_admin/gdoa/raw/master/docs/wx.png)

## 开源

- 承诺永久免费开源
- 允许企业/个人单独使用
- 如用于商业活动或二次开发后发售，请购买相关版权
- 不提供私下维护工作，如有bug请 [issures](https://gitee.com/ruitao_admin/gododbs) 提交
- 请尊重作者的劳动成果
