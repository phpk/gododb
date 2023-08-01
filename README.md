
# godoDb

## Install dependencies

```
pnpm i

```

## Start server

```
npm start
```

## Deploy with pm2

Use pm2 to deploy app on production enviroment.

```
pm2 start pm2.json
# pm2 reload pm2.json //reload
```

## 支持sqlite，库有点大，耐心等待下载
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