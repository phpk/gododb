## 静态访问

### 安装
```
npm install yumu-static-server -g
```
### 使用

```
cd www # 进入静态目录
server  # 会在当前目录下启动一个静态资源服务器，默认端口为8080

server -p[port] 3000  # 会在当前目录下启动一个静态资源服务器，端口为3000

server -i[index] index.html  # 设置文件夹在默认加载的文件

server -c[charset] UTF-8  # 设置文件默认加载的字符编码

server -cors  # 开启文件跨域

server -h[https]  # 开启https服务

server --openindex  # 是否打开默认页面

server --no-openbrowser  # 关闭自动打开浏览器

```