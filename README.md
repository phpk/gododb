
# godoDb

## 特点
godoDb数据库设计器，是一款mysql数据库管理工具。

- 支持数据备份还原；
- 支持自动生成数据库设计文档，md 格式以及实时预览，可以下载成 pdf/word文件；
- 支持数据表名/注释/autoid 的更改，支持优化表/修复表/删除表/清空表；
- 可查看/编辑/新增/复制任意表数据；
- 可执行sql文件，并查看执行后的数据结果；
- 可更改字段名/注释/默认值/排序，可拖拽排序字段，可删除字段；
- 支持连接/管理外部数据库，可通过ssh连接外部数据库，可导入pem文件连接；
- 支持数据库表保护；
- 精细化的权限控制；
- 可查询任何操作记录；

## 安装

```
pnpm i

```

## 启动服务

```
npm start
```

## 正式环境部署

```
pm2 start pm2.json
# pm2 reload pm2.json //reload
```

## 支持sqlite
- 库有点大，耐心等待下载
```
pnpm i think-model-sqlite -s
```
- 打开src/config/adapter.js第五行注释
```
const sqlite = require('think-model-sqlite');
```
以及第49行到55行注释
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